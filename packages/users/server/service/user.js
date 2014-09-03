'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');
var async = require('async');

exports.getRelatedUsers = function(id, callback) {
  var result = {
    parent: [],
    siblings: [],
    children: []
  };
  async.waterfall([
    function(cb) {
      User.findOne({_id: id}).populate('parent').exec(function(err, user) {
        cb(err, user);
      });
    },
    function(user, cb) {
      result.parent.push(user.parent);
      User.find({parent: user.parent._id}).exec(function(err, siblings) {
        cb(err, siblings, user);
      });
    },
    function(siblings, user, cb) {
      for(var i = 0; i < siblings.length; i+=1) {
        if(siblings[i]._id.toString() === id.toString()) {
          siblings.splice(i, 1);
        }
      }
      result.siblings = siblings;
      User.find({parent: user._id}).exec(function(err, children) {
        cb(err, children);
      });
    },
    function(children, cb) {
      result.children = children;
      cb(null, result);
    }

  ], callback);
};

exports.chooseNominators = function(id, nominatorIds, callback) {
  async.waterfall([
    function(cb){
      User.findOne({_id: id}).exec(function(err, user){
        cb(err, user);
      });
    },
    function(user, cb){
      user.nominators = nominatorIds;
      user.save();
      cb(null, user);
    }
  ], callback);
};

exports.getEvaluatees = function(id, callback){
  async.waterfall([
    function(cb){
      User.find({nominators:{'$in':[id]}}).exec(function(err, users){
        cb(err, users);
      });
    }
  ], callback);
};


'use strict';

var Cycle = require('../models/cycle.js').Cycle;

exports.getCycleById = function(id, callback){
  Cycle.findOne({_id:id}).exec(function(err, cycle){
    callback(err, cycle);
  });
};

exports.update = function(cycle, callback){
  cycle.save(function(err, cycle){
    callback(err, cycle);
  });
};

exports.getAllCycles = function(callback){
  Cycle.find({}).exec(function(err, cycles){
    callback(err, cycles);
  });
};

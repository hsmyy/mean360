'use strict';

var Question = require('../models/question.js').Question;
//var mongoose = require('mongoose');
//var User = mongoose.model('User');

exports.save = function(question, callback) {
  var newQuestion = new Question({
    category: question.category,
    content: question.content
  });

  newQuestion.save(function(err, question) {
    callback(err, question);
  });
};

exports.getQuestionById = function(id, callback) {
  Question.findOne({_id: id}).populate('category').exec(function(err, question) {
    callback(err, question);
  });
};

exports.getAllQuestion = function(callback) {
  Question.find({}).populate('category').exec(function(err, questions) {
    callback(err, questions);
  });
};

exports.removeQuestionById = function(id, callback){
  Question.findOne({_id:id}).remove().exec(function(err){
    callback(err);
  });
};
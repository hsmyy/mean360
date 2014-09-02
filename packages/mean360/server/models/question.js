var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  category:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  }
});

exports.Question = mongoose.model('Question', QuestionSchema);





var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  category:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Category'
  },
  content:{
    type:String,
    required:true
  }
});

exports.Question = mongoose.model('Question', QuestionSchema);





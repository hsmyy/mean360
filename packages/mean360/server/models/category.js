var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  category:{
    type:String,
    required:true
  }
});

exports.Category = mongoose.model('Category', CategorySchema);





var Category = require('../models/category.js').Category;

exports.getAllCategory = function(callback){
  Category.find({}).exec(function(err, categories){
    callback(err, categories);
  });
};

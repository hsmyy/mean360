var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CycleSchema = new Schema({
  start:{
    type:Date
  },
  end:{
    type:Date
  },
  config:{
    superior_min:Number,
    superior_max:Number,
    peer_min:Number,
    peer_max:Number,
    subordinate_min:Number,
    subordinate_max:Number
  }
});

exports.Cycle = mongoose.model('Cycle', CycleSchema);





var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActionPlanSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'User'
  },
  cycle:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Cycle'
  },
  category:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Category'
  },
  action:{
    type:String,
    required:true
  },
  progress:{
    type:Number,
    min:0,
    max:100
  },
  satisfactory:{
    type:Number,
    min:0,
    max:100
  }
});

exports.ActionPlan = mongoose.model('ActionPlan', ActionPlanSchema);





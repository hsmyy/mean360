var ActionPlan = require('../models/actionPlan.js').ActionPlan;

exports.save = function(actionPlan, callback){
  var newActionPlan = new ActionPlan({
    category:actionPlan.category,
    action:actionPlan.action,
    progress:actionPlan.progress,
    satisfactory:actionPlan.satisfactory
  });

  newActionPlan.save(function(err, actionPlan){
    callback(err, actionPlan);
  });

};

exports.getActionPlansByUserAndCycle = function(userId, cycleId, callback){
  ActionPlan.find({user:userId, cycle:cycleId}).populate('category').exec(function(err, actionPlans){
    callback(err, actionPlans);
  });
};




'use strict';

var mean = require('meanio');

exports.render = function(req, res) {

  var modules = [];
  // Preparing angular modules list with dependencies
  for (var name in mean.modules) {
    modules.push({
      name: name,
      module: 'mean.' + name,
      angularDependencies: mean.modules[name].angularDependencies
    });
  }

  var adminPanel = ['admin','consultant'];

  function isAdmin() {
	  if(req.user !== undefined && req.user.roles !== undefined){
          for(var i = 0, n = adminPanel.length; i < n; i += 1){
              if(req.user.roles.indexOf(adminPanel[i]) !== -1){
                  return true;
              }
          }
	  }
	  return false;
  }

  // Send some basic starting info to the view
  res.render('index', {
    user: req.user ? {
      name: req.user.name,
      _id: req.user._id,
      username: req.user.username,
      roles: req.user.roles
    } : {},
    modules: modules,
    isAdmin: isAdmin(),
    adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
  });
};

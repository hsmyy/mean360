'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Evaluation = new Module('evaluation');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Evaluation.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Evaluation.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Evaluation.menus.add({
    title: '评估',
    link: 'evaluation',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Evaluation.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Evaluation.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Evaluation.settings(function(err, settings) {
        //you now have the settings object
    });
    */
  Evaluation.aggregateAsset('css','evaluation.css');
  return Evaluation;
});

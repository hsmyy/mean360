'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Feedback = new Module('feedback');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Feedback.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Feedback.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Feedback.menus.add({
    title: 'feedback',
    link: 'feedback',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Feedback.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Feedback.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Feedback.settings(function(err, settings) {
        //you now have the settings object
    });
    */
  Feedback.aggregateAsset('css','feedback.css');
  Feedback.aggregateAsset('js','highcharts.src.js');
  Feedback.aggregateAsset('js','highcharts-ng.js');
  return Feedback;
});

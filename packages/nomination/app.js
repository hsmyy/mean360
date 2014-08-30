'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Nomination = new Module('nomination');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Nomination.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Nomination.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Nomination.menus.add({
    title: 'nomination',
    link: 'nomination',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Nomination.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Nomination.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Nomination.settings(function(err, settings) {
        //you now have the settings object
    });
    */
  Nomination.aggregateAsset('css', 'nomination.css');
  Nomination.aggregateAsset('css', 'ng-table.css',{global:true});
  Nomination.aggregateAsset('js', 'ng-table.js',{global: true});
  
  return Nomination;
});

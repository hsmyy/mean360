'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Mean360 = new Module('Mean360');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Mean360.register(function(app, auth, database, users) {

	//We enable routing. By default the Package Object is passed to the routes
	Mean360.routes(app, auth, database, users);

	//We are adding a link to the main menu for all authenticated users
	Mean360.menus.add({
		title : '选择评价者',
		link : '选择评价者',
		roles : [ 'authenticated' ],
		menu : 'main'
	});

	Mean360.menus.add({
		title : '评估',
		link : '评估',
		roles : [ 'authenticated' ],
		menu : 'main'
	});

	Mean360.menus.add({
		title : '反馈',
		link : '反馈',
		roles : [ 'authenticated' ],
		menu : 'main'
	});
	
	Mean360.menus.add({
		title : '管理',
		link : '管理',
		roles : [ 'authenticated' ],
		menu : 'main'
	});

	Mean360.angularDependencies(['ngTable','highcharts-ng','angular-growl']);
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
	Mean360.aggregateAsset('css', 'nomination.css');
	Mean360.aggregateAsset('css', 'ng-table.css');
	Mean360.aggregateAsset('js', 'ng-table.js');

	Mean360.aggregateAsset('css', 'evaluation.css');

	Mean360.aggregateAsset('css', 'feedback.css');
	Mean360.aggregateAsset('js', 'highcharts.src.js');
	Mean360.aggregateAsset('js', 'highcharts-ng.js');
	
	Mean360.aggregateAsset('css','angular-growl.min.css');
	Mean360.aggregateAsset('js','angular-growl.js');

	return Mean360;
});

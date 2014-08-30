'use strict';

angular.module('mean.feedback').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('feedback', {
      url: '/feedback/example',
      templateUrl: 'feedback/views/feedback.html'
    });
  }
]);

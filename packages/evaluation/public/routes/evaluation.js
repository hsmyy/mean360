'use strict';

angular.module('mean.evaluation').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('evaluation', {
      url: '/evaluation/example',
      templateUrl: 'evaluation/views/eval.html'
    });
  }
]);

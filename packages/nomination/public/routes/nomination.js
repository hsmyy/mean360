'use strict';

angular.module('mean.nomination').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('nomination', {
      url: '/nomination',
      templateUrl: 'nomination/views/nomi.html'
    });
  }
]);

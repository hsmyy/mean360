'use strict';

angular.module('mean.mean360').config(
		[ '$stateProvider', function($stateProvider) {
			$stateProvider.state('nomination', {
				url : '/nomination',
				templateUrl : 'mean360/views/nomi.html'
			}).state('evaluation', {
				url : '/evaluation/',
				templateUrl : 'mean360/views/eval.html'
			}).state('feedback', {
				url : '/feedback/',
				templateUrl : 'mean360/views/feedback.html'
			});
		} ]);

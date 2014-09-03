'use strict';

angular.module('mean.mean360').config(
		[ '$stateProvider', function($stateProvider) {
			$stateProvider.state('選擇評價者', {
				url : '/nomination/',
				templateUrl : 'mean360/views/nomi.html'
			}).state('評估', {
				url : '/evaluation/',
				templateUrl : 'mean360/views/eval.html'
			}).state('反饋', {
				url : '/feedback/',
				templateUrl : 'mean360/views/feedback.html'
			}).state('管理',{
				url : '/manage/',
				templateUrl : 'mean360/views/manage.html'
			});
		} ]);

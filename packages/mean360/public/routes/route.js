'use strict';

angular.module('mean.mean360').config([ '$stateProvider', function ($stateProvider) {
    $stateProvider.state('nomination', {
        url: '/nomination/',
        templateUrl: 'mean360/views/nomi.html'
    }).state('eval', {
        url: '/evaluation/',
        templateUrl: 'mean360/views/eval.html'
    }).state('feedback', {
        url: '/feedback/',
        templateUrl: 'mean360/views/feedback.html'
    }).state('manage', {
        url: '/manage/',
        templateUrl: 'mean360/views/manage.html'
    }).state('settings', {
    	url: '/settings/',
    	templateUrl: 'mean360/views/settings.html'
    }).state('users',{
    	url: '/users/',
    	templateUrl: 'mean360/views/users.html'
    });
} ]);


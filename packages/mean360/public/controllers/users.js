'use strict';

angular.module('mean.mean360').controller(
    'UserAdminController',
    [ '$scope', '$filter', 'Global', 'Manager', 'ngTableParams', 'toastr',
        function ($scope, $filter, Global, Manager, NgTableParams, toastr) {
            $scope.users = [{
               'name' : 'a',
                'department' : 'b',
                'position' : 'c',
                'roles' : 'admin',
                'mode' : 0
            },{
                'name' : 'a',
                'department' : 'b',
                'position' : 'c',
                'roles' : 'admin',
                'mode' : 0
            },{
                'name' : 'a',
                'department' : 'b',
                'position' : 'c',
                'roles' : 'admin',
                'mode' : 0
            },{
                'name' : 'a',
                'department' : 'b',
                'position' : 'c',
                'roles' : 'admin',
                'mode' : 0
            }];

            $scope.apps = [{
                'name' : 'a',
                'roles' : 'admin',
                'mode' : 0
            },{
                'name' : 'a',
                'roles' : 'admin',
                'mode' : 0
            },{
                'name' : 'a',
                'roles' : 'admin',
                'mode' : 0
            },{
                'name' : 'a',
                'roles' : 'admin',
                'mode' : 0
            }];

            $scope.page = 0;

            $scope.userSearch = '';
            $scope.appSearch = '';

            $scope.changeUserEditMode = function($index){
                var mode = $scope.users[$index].mode;
                $scope.users[$index].mode = 1 - mode;
            };

            $scope.saveUserEdit = function($index){
                var mode = $scope.users[$index].mode;
                $scope.users[$index].mode = 1 - mode;
            };

            $scope.cancelUserEdit = function($index){
                var mode = $scope.users[$index].mode;
                $scope.users[$index].mode = 1 - mode;
            };

            $scope.changeAppEditMode = function($index){
                var mode = $scope.apps[$index].mode;
                $scope.apps[$index].mode = 1 - mode;
            };

            $scope.saveAppEdit = function($index){
                var mode = $scope.apps[$index].mode;
                $scope.apps[$index].mode = 1 - mode;
            };

            $scope.cancelAppEdit = function($index){
                var mode = $scope.apps[$index].mode;
                $scope.apps[$index].mode = 1 - mode;
            };

            $scope.changeSection = function(idx){
                $scope.page = idx;
            }
        }
    ]);
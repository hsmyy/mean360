'use strict';

angular.module('mean.mean360').controller('AdminController', ['$scope', 'Global', 'Menus', '$rootScope',
    function($scope, Global, Menus, $rootScope) {
        $scope.global = Global;
        $scope.menus = {};
        $scope.overIcon = false;

        var icons = 'mean360/assets/img/icons/';
        
        // Default hard coded menu items for main menu
        var defaultAdminMenu = [{
            'roles': ['admin'],
            'title': '应用管理',
            'link': 'manage',
            'icon': icons + 'modules.png'
        }, {
            'roles': ['consultant'],
            'title': '模型设定',
            'link': 'settings',
            'icon': icons + 'settings.png'
        }, {
            'roles': ['admin'],
            'title': '用户管理',
            'link': 'users',
            'icon': icons + 'users.png'
        }];

        //TODO temp code, this should be done in server side
        var roles = $scope.global.user.roles;
        var realAdminMenu = [];
        outer:
        for(var i = 0, n = defaultAdminMenu.length; i < n; i += 1){
            for(var j = 0, m = defaultAdminMenu[i].roles.length; j < m; j += 1){
                if(roles.indexOf(defaultAdminMenu[i].roles[j]) === -1){
                    continue outer;
                }
            }
            realAdminMenu.push(defaultAdminMenu[i]);
        }

        // Query menus added by modules. Only returns menus that user is allowed to see.
        function queryMenu(name, defaultMenu) {
            Menus.query({
                name: name,
                defaultMenu: defaultMenu
            }, function(menu) {
                $scope.menus[name] = menu;
            });
        }

        // Query server for menus and check permissions
        queryMenu('admin', realAdminMenu);

        $scope.isCollapsed = false;

        $rootScope.$on('loggedin', function() {

            queryMenu('admin', realAdminMenu);

            $scope.global = {
                authenticated: !! $rootScope.user,
                user: $rootScope.user
            };
        });
    }
]);

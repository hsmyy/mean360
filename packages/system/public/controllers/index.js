'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$http', 'Global',
    function ($scope, $http, Global) {
        $scope.global = Global;

        $scope.createNewEvaluation = function () {
            var name = $scope.evaluationName;
            var description = $scope.evaluationDescription;

            alert('About to send POST ajax to server with name: ' + name + ', description: ' + description);

            $http.post('/data/evaluations', {
                name: name,
                description: description
            }).success(function(data, status) {
                alert('Ajax succeeded!');
            }).error(function(data, status) {
                alert('Ajax failed: ' + status);
            });
        };
    }
]);

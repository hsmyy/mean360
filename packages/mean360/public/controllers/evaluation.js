'use strict';

angular.module('mean.mean360').controller('EvaluationController', ['$scope', '$http', 'Global', 'Evaluation',
    function ($scope, $http, Global, Evaluation) {
        $scope.global = Global;
        $scope.package = {
            name: 'evaluation'
        };

        $scope.phase = 0;
        $scope.rating = 5;


//    $scope.questions = [                    {
//                        'id' : '1',
//                        'category' : '洞察力',
//                        'question' : '可以提出有力的問題，使複雜問題清晰化'
//                        },{
//                        	'id' : '2',
//                        	'category' :'洞察力',
//                        	'question' : '指出討論中的漏洞或錯誤'
//                        },{
//                        	'id' : '3',
//                        	'category' : '洞察力',
//                        	'question' : '解決問題時，快速發現問題的關鍵原因'
//                        },{
//                        	'id' : '4',
//                        	'category' : '前瞻性',
//                        	'question' : '分享行業前沿信息'
//                        }];
        $http.get('questions').success(function (data) {
            $scope.questions = data;
        });

        // TEST ONLY. Replace this with ajax request.
        $scope.candidates = [
            {
                img: 'mean360/assets/img/account.jpg',
                name: '自己'
            },
            {
                img: 'mean360/assets/img/account.jpg',
                name: '关羽',
                position: '大将军',
                department: '荆州'
            }
        ];
        $http.get('candidates').success(function (data, status) {
            $scope.candidates = data;
        }).error(function(data, status) {
            // TODO Handler errors here.
        });


        $scope.current = 0;

        $scope.startEval = function () {
            $scope.phase = 1;
        };

        $scope.delCandidate = function (index) {
            if($scope.candidates && $scope.candidates.length) {
                $scope.candidates.splice(index, 1);
            }
        };

        $scope.next = function (answer) {
            if ($scope.current + 1 < $scope.questions.length) {
                $scope.current += 1;
            } else {
                $scope.phase = 2;
            }
        };
    }
]);

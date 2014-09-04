'use strict';

angular.module('mean.mean360').controller('EvaluationController', ['$scope', '$http', 'Global', 'Evaluation', 'growl',
    function ($scope, $http, Global, Evaluation, growl) {
        $scope.global = Global;
        $scope.package = {
            name: 'evaluation'
        };

        $scope.phase = 0;
        $scope.rating = 5;


        $http.get('questions').success(function (data) {
            $scope.questions = data;
        }).error(function (data, status) {
            $scope.questions = [
                {
                    'id': '1',
                    'category': '洞察力',
                    'question': '可以提出有力的問題，使複雜問題清晰化'
                },
                {
                    'id': '2',
                    'category': '洞察力',
                    'question': '指出討論中的漏洞或錯誤'
                },
                {
                    'id': '3',
                    'category': '洞察力',
                    'question': '解決問題時，快速發現問題的關鍵原因'
                },
                {
                    'id': '4',
                    'category': '前瞻性',
                    'question': '分享行業前沿信息'
                }
            ];
        });


        $http.get('candidates').success(function (data, status) {
            $scope.candidates = data;
        }).error(function (data, status) {
            // TODO Handler errors here.
            $scope.candidates = [
                {
                    img: 'mean360/assets/img/account.jpg',
                    name: '自己',
                    position: '',
                    department: '',
                    status: 'NEW',
                    scores: [],
                    actionplan: [
                        {
                            name: '123',
                            progress: 3,
                            satisfy: 3
                        },
                        {
                            name: '234',
                            progress: 3,
                            satisfy: 3
                        }
                    ]
                },
                {
                    img: 'mean360/assets/img/account.jpg',
                    name: '关羽',
                    position: '大将军',
                    department: '荆州',
                    status: 'PROGRESS',
                    scores: [],
                    actionplan: [
                        {
                            name: '123',
                            progress: 3,
                            satisfy: 3
                        },
                        {
                            name: '234',
                            progress: 3,
                            satisfy: 3
                        }
                    ]
                }
            ];
        });

        $scope.currentPerson = 0;
        $scope.currentQuestion = 0;

        $scope.startEval = function (candidate) {
            $scope.evaluatingCandidate = candidate;
            $scope.phase = 1;
        };

        $scope.delCandidate = function (index) {
            if ($scope.candidates && $scope.candidates.length) {
                $scope.candidates.splice(index, 1);
            }
        };

        $scope.next = function (step) {
            //TODO save answer
            $scope.phase = step;
        };

        $scope.finishEvaluation = function (candidate) {
            growl.addSuccessMessage('Evaluation of ' + candidate.name + ' finished.', {
                'ttl': 3000
            });

            $scope.phase = 0;
        };
    }
]);

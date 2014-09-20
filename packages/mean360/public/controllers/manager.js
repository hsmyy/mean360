'use strict';

angular.module('mean.mean360').controller(
    'ManagerController',
    [ '$scope', '$filter', 'Global', 'Manager', 'ngTableParams', 'toastr',
        function ($scope, $filter, Global, Manager, NgTableParams, toastr) {
            $scope.func = 2;

            $scope.timeline = [
                {
                    'name': '选择评价者',
                    'time': 75,
                    'progress': 70,
                    'startInput': {},
                    'endInput': {}
                },
                {
                    'name': '评价',
                    'time': 85,
                    'progress': 80,
                    'startInput': {},
                    'endInput': {}
                },
                {
                    'name': '反馈',
                    'time': 95,
                    'progress': 90,
                    'startInput': {},
                    'endInput': {}
                }
            ];

            $scope.startPeriod = function (index) {
                toastr.success('toast-top-right', $scope.timeline[index].name + '开始');
            };

            $scope.notifyPeriod = function (index) {
                toastr.success('toast-top-right', '未完成' + $scope.timeline[index].name + '的相关人员已经被邮件提醒');
            };

            $scope.finishPeriod = function (index) {
                toastr.success('toast-top-right', $scope.timeline[index].name + '结束');
            };

            $scope.save = function () {
                toastr.success('toast-top-right', '保存成功！');
            };

            $scope.openCalendar = function($event, input) {
                $event.preventDefault();
                $event.stopPropagation();

                input.opened = true;
            };
        }
    ]);

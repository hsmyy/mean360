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

            $scope.category = ['戰略執行', '前瞻預測', '目標意識'];
            $scope.newCategory = '愿景规划';
            $scope.choosedCategory = 0;
            $scope.newQuestion = '能够很好地预测行业未来发展方向';

            var data = [
                {
                    category: '戰略執行',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '戰略執行',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '戰略執行',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '戰略執行',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '前瞻預測',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '前瞻預測',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '前瞻預測',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '目標意識',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '目標意識',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作',
                    content: '123'
                },
                {
                    category: '目標意識',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '團隊合作',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '團隊合作',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                },
                {
                    category: '團隊合作',
                    question: '善于建立和维持广泛、友好的人际关系来帮助开展工作'
                }
            ];

            $scope.tableParams = new NgTableParams(
                {
                    page: 1, // show first page
                    count: 10
                    // count per page
                },
                {
                    groupBy: 'category',
                    total: data.length,
                    getData: function ($defer, params) {
                        var orderedData = params.sorting() ? $filter('orderBy')(data, $scope.tableParams.orderBy()) : data;

                        $defer.resolve(orderedData.slice(
                                (params.page() - 1) * params.count(),
                                params.page() * params.count()));
                    }
                });
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

            $scope.createCategory = function () {
                var newCate = $scope.newCategory.trim();
                if (newCate.length > 0) {
                    $scope.category.push(newCate);
                }
            };

            $scope.createQuestion = function () {
                var cate = $scope.category[$scope.choosedCategory];
                var newQues = $scope.newQuestion.trim();
                if (newQues.length > 0) {
                    data.push({
                        category: cate,
                        question: newQues
                    });
                    $scope.tableParams.reload();
                }
            };

            $scope.openCalendar = function($event, input) {
                $event.preventDefault();
                $event.stopPropagation();

                input.opened = true;
            };
        }
    ]);

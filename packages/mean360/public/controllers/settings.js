/**
 * Created by fify on 9/21/14.
 */
'use strict';

angular.module('mean.mean360').controller('SettingsController',
    [ '$scope', '$filter', 'Global', 'Manager', 'ngTableParams', 'toastr',
        function ($scope, $filter, Global, Manager, NgTableParams, toastr) {
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
        }
    ]);

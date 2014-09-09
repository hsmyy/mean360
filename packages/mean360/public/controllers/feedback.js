'use strict';

angular.module('mean.mean360').controller('FeedbackController', [
    '$scope',
    '$filter',
    '$document',
    'Global',
    'Feedback',
    'ngTableParams',
    'toastr',
    function ($scope, $filter, $document, Global, Feedback, NgTableParams, toastr) {
        $scope.global = Global;
        $scope.package = {
            name: 'feedback'
        };

        //ACTION PLAN
        $scope.previewIdx = 1;
        $scope.previewSet = [
            {
                'preview': false,
                'command': '编辑'
            },
            {
                'preview': true,
                'command': '预览'
            }
        ];
        
        //section 1
        $scope.score = {
            'category': [ '洞察力', '前瞻性', '果断性', '乐观',
                '模糊耐受性' ],
            'average': [ 10, 15, 12, 8, 7 ],
            'high': [ 12, 15, 12, 10, 9 ],
            'low': [ 8, 10, 10, 6, 5 ]
        };
        
        $scope.generalChartConfig = {
                options: {
                    chart: {
                        type: 'bar'
                    }
                },
                series: [
                    {
                        name: '平均分',
                        data: $scope.score.average
                    },
                    {
                        name: '最高分',
                        data: $scope.score.high
                    },
                    {
                        name: '最低分',
                        data: $scope.score.low
                    }
                ],
                title: {
                    text: ''
                },
                xAxis: {
                    categories: $scope.score.category
                },
                yAxis: {
                	title : ''
                },

                loading: false
            };
        
        //section 2
        $scope.strong = [{
        	id : 'TOP1',
        	name : '人际关系经营',
        	score : 3.6,
        	style : 'category-tableitem'
        },{
        	id : '40.',
        	name : '善于建立和维持广泛、友好的人际关系来帮助开展工作',
        	score : 3.8
        },{
        	id : '40.',
        	name : '善于建立和维持广泛、友好的人际关系来帮助开展工作',
        	score : 3.8
        },{
        	id : 'TOP2',
        	name : '人际关系经营',
        	score : 3.6,
        	style : 'category-tableitem'
        },{
        	id : '40.',
        	name : '善于建立和维持广泛、友好的人际关系来帮助开展工作',
        	score : 3.8
        }];
        
        $scope.weak = [{
        	id : 'TOP1',
        	name : '人际关系经营',
        	score : 3.6,
        	style : 'category-tableitem'
        },{
        	id : '40.',
        	name : '善于建立和维持广泛、友好的人际关系来帮助开展工作',
        	score : 3.8
        },{
        	id : 'TOP2',
        	name : '人际关系经营',
        	score : 3.6,
        	style : 'category-tableitem'
        },{
        	id : '40.',
        	name : '善于建立和维持广泛、友好的人际关系来帮助开展工作',
        	score : 3.8
        }];
        
        

        
        
        //section 3
        $scope.selfDiff = {
        	categories : [ '在准确评估下属能力的基础上授予合理的工作权限', '对组织战略有全面深入的理解',
        	                    '为各项工作设置清晰的完成标准和时限', '给关键工作分配更多的人手或其他资源', '有良好的授权意识，愿意將工作分配給下属' ],
        	data : [ 5, 4, 3, -2, -3 ]
        };
        
        $scope.selfDiffChartConfig = {
            options: {
                chart: {
                    type: 'column',
                    inverted: true
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: $scope.selfDiff.categories
            },
            yAxis: {
            	title : {
            		text : '',
            		align : 'high'
            	}
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: '平均分',
                    data: $scope.selfDiff.data
                }
            ]
        };

        //section 4
        $scope.otherDiff = {
        	categories : ['培养下属', '战略执行', '前瞻预测', '规划安排', '激励他人'],
        	data : [
                    {
                        name: '上级',
                        data: [4.0, 3.5, 3.6, 4.2, 2.8]
                    },
                    {
                        name: '同事',
                        data: [3.5, 4.2, 3.7, 4.0, 4.3]
                    },
                    {
                        name: '下级',
                        data: [2.8, 3.5, 4.0, 3.5, 4.0]
                    }
                ]
        };
        $scope.otherDiffchartConfig = {
            options: {
                chart: {
                    type: 'bar'
                }, legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    shadow: true
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: $scope.otherDiff.categories,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: $scope.otherDiff.data
        };
        
        //section 5
        $scope.highLight = [
		{
			'name' : '优势',
			'data' : [
					{
						'group' : '上级',
						'question' : [
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								} ]
					},
					{
						'group' : '同事',
						'question' : [
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								} ]
					},
					{
						'group' : '下属',
						'question' : [
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								} ]
					} ]
		},
		{
			'name' : '劣势',
			'data' : [
					{
						'group' : '上级',
						'question' : [
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								} ]
					},
					{
						'group' : '同事',
						'question' : [
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								} ]
					},
					{
						'group' : '下属',
						'question' : [
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								},
								{
									'id' : 5,
									'content' : '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
									'score' : 4.0,
									'category' : '战略执行'
								} ]
					} ]
		} ];
        
        //section 6
        $scope.analysis = [
            {
                'name': '待发展共识区',
                'tags': [ '团队合作' ]
            },
            {
                'name': '盲区',
                'tags': [ '前瞻预测', '绩效管理' ]
            },
            {
                'name': '潜能区',
                'tags': [ '规划管理', '授权管理', '抗压能力' ]
            },
            {
                'name': '优势共识区',
                'tags': [ '培养下属', '人际关系经营' ]
            }
        ];

        
        var data = [
            {
                category: '战略执行',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '战略执行',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '战略执行',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '战略执行',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '前瞻预测',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '前瞻预测',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '前瞻预测',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '目标意识',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '目标意识',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '目标意识',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '团队合作',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '团队合作',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            },
            {
                category: '团队合作',
                question: '引导下属将自身工作与组织战略紧密结合，以战略为导向开展工作',
                self: 4.3,
                boss: 2.0,
                peer: 3.0,
                sub: 4.0,
                others: 3.0,
                diff: -1.0
            }
        ];

      //actionplan
        $scope.actionInput = [
            {
                'tags': [
                    {
                        'action': ''
                    }
                ]
            },
            {
                'tags': [
                    {
                        'action': ''
                    },
                    {
                        'action': ''
                    }
                ]
            },
            {
                'tags': [
                    {
                        'action': ''
                    },
                    {
                        'action': ''
                    },
                    {
                        'action': ''
                    }
                ]
            },
            {
                'tags': [
                    {
                        'action': ''
                    },
                    {
                        'action': ''
                    }
                ]
            }
        ];

        $scope.actions = [
            {
                'tags': [
                    {
                        'action': []
                    }
                ]
            },
            {
                'tags': [
                    {
                        'action': []
                    },
                    {
                        'action': []
                    }
                ]
            },
            {
                'tags': [
                    {
                        'action': []
                    },
                    {
                        'action': []
                    },
                    {
                        'action': []
                    }
                ]
            },
            {
                'tags': [
                    {
                        'action': []
                    },
                    {
                        'action': []
                    }
                ]
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

        $scope.addAction = function (categoryId, tagId) {
            var actionSet = $scope.actions[categoryId].tags[tagId].action;
            var action = $scope.actionInput[categoryId].tags[tagId].action
                .trim();
            if (action.length > 0) {
                var dup = false;
                for (var i = 0, n = actionSet.length; i < n; i += 1) {
                    if (actionSet[i].toLowerCase() === action
                        .toLowerCase()) {
                        dup = true;
                        break;
                    }
                }
                if (!dup) {
                    actionSet.push(action);
                }
            }
        };

        $scope.preview = function () {
            $scope.previewIdx = 1 - $scope.previewIdx;
        };

        $scope.save = function () {
            toastr.success('toast-top-right', 'This adds a success message');
        };
        
        $scope.toTop = function(){
        	$document.scrollTop(0,1000);
        };
    } ]);

'use strict';

angular.module('mean.feedback',['highcharts-ng']).controller('FeedbackController', ['$scope', 'Global', 'Feedback',
  function($scope, Global, Feedback) {
    $scope.global = Global;
    $scope.package = {
      name: 'feedback'
    };
    
    $scope.score = {
    	'category' : ['洞察力','前瞻性','果断性','乐观','模糊耐受性'],
    	'average' : 	[10, 15, 12, 8, 7],
    	'high': [12, 15, 12, 10, 9],
    	'low': [8, 10, 10, 6, 5]
    };
    
    $scope.analysis = {
    		'develop' : ['团队合作'],
    		'blind' : ['前瞻预测','绩效管理'],
    		'protential' : ['规划管理','授权管理','抗压能力'],
    		'advantage' : ['培养下属','人际关系经营']
    };
    
    $scope.chartConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            series: [{
            	name: '平均分',
                data: $scope.score.average
            },{
            	name: '最高分',
            	data: $scope.score.high
            },{
            	name: '最低分',
            	data: $scope.score.low
            }],
            title: {
                text: '综合评价'
            },
            xAxis: {
            	categories: $scope.score.category
            },

            loading: false
        };
  }
]);

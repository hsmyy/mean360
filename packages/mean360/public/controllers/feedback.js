'use strict';

angular.module('mean.mean360').controller('FeedbackController', ['$scope', 'Global', 'Feedback', 'growl',
  function($scope, Global, Feedback, growl) {
    $scope.global = Global;
    $scope.package = {
      name: 'feedback'
    };
    
    $scope.previewIdx = 1;
    
    $scope.previewSet = [{
    	'preview' : false,
    	'command' : '編輯'
    },{
    	'preview' : true,
    	'command' : '預覽'
    }];
    
    $scope.score = {
    	'category' : ['洞察力','前瞻性','果断性','乐观','模糊耐受性'],
    	'average' : 	[10, 15, 12, 8, 7],
    	'high': [12, 15, 12, 10, 9],
    	'low': [8, 10, 10, 6, 5]
    };
    
    $scope.analysis = [{
    	'name' : '待发展共识区',
    	'tags' : ['团队合作']
    },{
    	'name' : '盲区',
    	'tags' : ['前瞻预测','绩效管理']
    },{
    	'name' : '潜能区',
    	'tags' : ['规划管理','授权管理','抗压能力']
    },{
    	'name' : '优势共识区',
    	'tags' : ['培养下属','人际关系经营']
    }];
   
    $scope.actionInput = [{
    	'tags' :[{
    		'action' : ''
    	}]
    },{
    	'tags' :[{
    		'action' : ''
    	},{
    		'action' : ''
    	}]
    },{
    	'tags' :[{
    		'action' : ''
    	},{
    		'action' : ''
    	},{
    		'action' : ''
    	}]
    },{
    	'tags' :[{
    		'action' : ''
    	},{
    		'action' : ''
    	}]
    }];
    
    $scope.actions = [{
    	'tags' :[{
    		'action' :[]
    	}]
    },{
    	'tags' :[{
    		'action' :[]
    	},{
    		'action' :[]
    	}]
    },{
    	'tags' :[{
    		'action' :[]
    	},{
    		'action' :[]
    	},{
    		'action' :[]
    	}]
    },{
    	'tags' :[{
    		'action' :[]
    	},{
    		'action' :[]
    	}]
    }];
    
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
    $scope.addAction = function(categoryId, tagId){
    	var actionSet = $scope.actions[categoryId].tags[tagId].action;
    	var action = $scope.actionInput[categoryId].tags[tagId].action.trim();
    	if(action.length > 0){
    		var dup = false;
    		for(var i = 0, n = actionSet.length; i < n; i += 1){
    			if(actionSet[i].toLowerCase() === action.toLowerCase()){
    				dup = true;
    				break;
    			}
    		}
    		if(!dup){
    			actionSet.push(action);
    		}
    	}
    };
    
    $scope.preview = function(){
    	$scope.previewIdx = 1 - $scope.previewIdx;
    };
    
    $scope.save = function(){
    	growl.addSuccessMessage('This adds a success message',{'ttl':3000});
    };
  }
]);

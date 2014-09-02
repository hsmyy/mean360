'use strict';

angular
		.module('mean.mean360')
		.controller(
				'FeedbackController',
				[
						'$scope',
						'$filter',
						'Global',
						'Feedback',
						'growl',
						'ngTableParams',
						function($scope, $filter, Global, Feedback, growl,
								NgTableParams) {
							$scope.global = Global;
							$scope.package = {
								name : 'feedback'
							};

							$scope.previewIdx = 1;

							$scope.previewSet = [ {
								'preview' : false,
								'command' : '編輯'
							}, {
								'preview' : true,
								'command' : '預覽'
							} ];

							$scope.score = {
								'category' : [ '洞察力', '前瞻性', '果断性', '乐观',
										'模糊耐受性' ],
								'average' : [ 10, 15, 12, 8, 7 ],
								'high' : [ 12, 15, 12, 10, 9 ],
								'low' : [ 8, 10, 10, 6, 5 ]
							};

							$scope.analysis = [ {
								'name' : '待发展共识区',
								'tags' : [ '团队合作' ]
							}, {
								'name' : '盲区',
								'tags' : [ '前瞻预测', '绩效管理' ]
							}, {
								'name' : '潜能区',
								'tags' : [ '规划管理', '授权管理', '抗压能力' ]
							}, {
								'name' : '优势共识区',
								'tags' : [ '培养下属', '人际关系经营' ]
							} ];

							$scope.actionInput = [ {
								'tags' : [ {
									'action' : ''
								} ]
							}, {
								'tags' : [ {
									'action' : ''
								}, {
									'action' : ''
								} ]
							}, {
								'tags' : [ {
									'action' : ''
								}, {
									'action' : ''
								}, {
									'action' : ''
								} ]
							}, {
								'tags' : [ {
									'action' : ''
								}, {
									'action' : ''
								} ]
							} ];

							$scope.actions = [ {
								'tags' : [ {
									'action' : []
								} ]
							}, {
								'tags' : [ {
									'action' : []
								}, {
									'action' : []
								} ]
							}, {
								'tags' : [ {
									'action' : []
								}, {
									'action' : []
								}, {
									'action' : []
								} ]
							}, {
								'tags' : [ {
									'action' : []
								}, {
									'action' : []
								} ]
							} ];

							$scope.chartConfig = {
								options : {
									chart : {
										type : 'bar'
									}
								},
								series : [ {
									name : '平均分',
									data : $scope.score.average
								}, {
									name : '最高分',
									data : $scope.score.high
								}, {
									name : '最低分',
									data : $scope.score.low
								} ],
								title : {
									text : ''
								},
								xAxis : {
									categories : $scope.score.category
								},

								loading : false
							};

							$scope.chartConfig2 = {
								options : {
									chart : {
										type : 'column',
										inverted : true
									}
								},
								title : {
									text : 'Column chart with negative values'
								},
								xAxis : {
									categories : [ '在準確評估下屬能力的基礎上授予合理的工作權限', '對組織戰略有全面深入的理解',
											'爲各項工作設置清晰的完成標準和時限', '給關鍵工作分配更多的人手或其他資源', '有良好的授權意識，願意將工作分配給下屬' ]
								},
								credits : {
									enabled : false
								},
								series : [ {
									name : 'John',
									data : [ 5, 4, 3, -2, -3 ]
								} ]
							};
							
							$scope.chartConfig3 = {                                           
							        options : {
							        	chart: {                                                           
								            type: 'bar'                                                    
								        },legend: {                                                          
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
							            categories: ['培養下屬', '戰略執行', '前瞻預測', '規劃安排', '激勵他人'],
							            title: {                                                       
							                text: null                                                 
							            }                                                              
							        },                                                                 
							        yAxis: {                                                           
							            min: 0,                                                        
							            title: {                                                       
							                text: 'Population (millions)',                             
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
							        series: [{                                                         
							            name: '上級',                                             
							            data: [107, 31, 635, 203, 2]                                   
							        }, {                                                               
							            name: '同事',                                             
							            data: [133, 156, 947, 408, 6]                                  
							        }, {                                                               
							            name: '下級',                                             
							            data: [973, 914, 4054, 732, 34]                                
							        }]                                                                 
							    };

							var data = [ {
								category : '戰略執行',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '戰略執行',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '戰略執行',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '戰略執行',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '前瞻預測',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '前瞻預測',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '前瞻預測',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '目標意識',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '目標意識',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '目標意識',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '團隊合作',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '團隊合作',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							}, {
								category : '團隊合作',
								question : 'Tiancum',
								self : 43,
								boss : 20,
								peer : 30,
								sub : 40,
								others : 30,
								diff : -10
							} ];

							$scope.tableParams = new NgTableParams(
									{
										page : 1, // show first page
										count : 10
									// count per page
									},
									{
										groupBy : 'category',
										total : data.length,
										getData : function($defer, params) {
											var orderedData = params.sorting() ? $filter('orderBy')(data,$scope.tableParams.orderBy()) : data;

											$defer.resolve(orderedData.slice(
													(params.page() - 1)	* params.count(),
													params.page() * params.count()));
										}
									});

							$scope.addAction = function(categoryId, tagId) {
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

							$scope.preview = function() {
								$scope.previewIdx = 1 - $scope.previewIdx;
							};

							$scope.save = function() {
								growl.addSuccessMessage(
										'This adds a success message', {
											'ttl' : 3000
										});
							};
						} ]);

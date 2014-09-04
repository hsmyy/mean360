'use strict';

angular.module('mean.mean360').controller(
		'ManagerController',
		[ '$scope', '$filter', 'Global', 'Manager','ngTableParams',
				function($scope, $filter, Global, Manager, NgTableParams) {
			
			$scope.timeline = [{
				'name' : '选择评价者',
				'time' : 75,
				'progress' : 70,
				'startTime' : '',
				'endTime' : ''
			},{
				'name' : '评价',
				'time' : 85,
				'progress' : 80,
				'startTime' : '',
				'endTime' : ''
			},{
				'name' : '反馈',
				'time' : 95,
				'progress' : 90,
				'startTime' : '',
				'endTime' : ''
			}];
			
			var data = [ {
				category : '戰略執行',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '戰略執行',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '戰略執行',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '戰略執行',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '前瞻預測',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '前瞻預測',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '前瞻預測',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '目標意識',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '目標意識',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '目標意識',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '團隊合作',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '團隊合作',
				question : 'Tiancum',
				content : '123'
			}, {
				category : '團隊合作',
				question : 'Tiancum',
				content : '123'
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
		}
]);
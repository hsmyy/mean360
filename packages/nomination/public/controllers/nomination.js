'use strict';

angular.module('mean.nomination',['ngTable']).controller(
		'NominationController',
		[ '$scope', 'Global', 'Nomination','ngTableParams',
				function($scope, Global, Nomination, NgTableParams) {
					$scope.global = Global;
					$scope.package = {
						name : 'nomination'
					};
					
					$scope.nomi = [{
						name : '上司',
						add : false,
						choose : [{
							'name' : '刘备',
							'position' : 'Boss',
							'department' : '-'
						}],
						candidates : [],
						maxNum : 1,
					},{
						name : '同事',
						add : false,
						choose : [{
							'name' : '关羽',
							'position' : '前将军',
							'department' : '荆州'
						}],
						candidates : [{
							'name' : '張飛',
							'position' : '左將軍',
							'department' : '益州'
						},{
							'name' : '趙雲',
							'position' : '右將軍',
							'department' : '益州'
						},{
							'name' : '法正',
							'position' : '軍師',
							'department' : '益州'
						},{
							'name' : '魏严',
							'position' : '軍師',
							'department' : '汉中'
						}],
						maxNum : 5
					},{
						name : '下属',
						add : false,
						choose : [{
							'name' : '姜维',
							'position' : '参谋',
							'department' : '汉中'
						}],
						candidates : [{
							'name' : '马良',
							'position' : '参谋',
							'department' : '益州'
						},{
							'name' : '李严',
							'position' : '参谋',
							'department' : '益州'
						},{
							'name' : '马谡',
							'position' : '参谋',
							'department' : '益州'
						},{
							'name' : '小兵',
							'position' : '参谋',
							'department' : '益州'
						}],
						maxNum : 5
					}];
					
					var bossCandidate = $scope.nomi[0].candidates;
//					var peerCandidate = $scope.nomi[1].candidates;
					var subCandidate = $scope.nomi[2].candidates;
					
					var bossTable = new NgTableParams({
				        page: 1,            // show first page
				        count: 10           // count per page
				    }, {
				        total: bossCandidate.length, // length of data
				        getData: function($defer, params) {
				            $defer.resolve(bossCandidate.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				        }
				    });
					var peerTable = new NgTableParams({
				        page: 1,            // show first page
				        count: 10           // count per page
				    }, {
				        total: $scope.nomi[1].candidates.length, // length of data
				        getData: function($defer, params) {
				            $defer.resolve($scope.nomi[1].candidates.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				        }
				    });
					var subTable = new NgTableParams({
				        page: 1,            // show first page
				        count: 10           // count per page
				    }, {
				        total: subCandidate.length, // length of data
				        getData: function($defer, params) {
				            $defer.resolve(subCandidate.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				        }
				    });
					
//					var candidatesVal = [bossCandidate, peerCandidate, subCandidate];
					$scope.candidatesTable = [bossTable, peerTable, subTable];
//					for(var i = 0, n = $scope.nomi.length; i < n; i = i + 1){
//						candidatesVal.push($scope.nomi[i].candidates);
//						var target = candidatesVal[i];
//						/*jshint -W083 */
//						$scope.candidatesTable.push(new NgTableParams({
//					        page: 1,            // show first page
//					        count: 10           // count per page
//					    }, {
//					        total: target.length, // length of data
//					        getData: function($defer, params) {
//					            $defer.resolve(target.slice((params.page() - 1) * params.count(), params.page() * params.count()));
//					        }
//					    }));
//					}
					
					$scope.canAdd = function(type){
						var group = $scope.nomi[type];
						return group.choose.length < group.maxNum;
					};
					
					$scope.canShow = function(type){
						return $scope.nomi[type].add;
					};
					
					$scope.show = function(type){
						$scope.nomi[type].add = !$scope.nomi[type].add;
					};
					
					$scope.isFinish = false;
					
					$scope.finish = function(){
						$scope.isFinish = !$scope.isFinish;
					};
					
					$scope.delCandidate = function(idx, type){
						$scope.nomi[type].candidates.push($scope.nomi[type].choose[idx]);
						$scope.nomi[type].choose.splice(idx, 1);
						$scope.candidatesTable[type].reload();
					};
					
					$scope.addCandidate = function(idx, type){
						$scope.nomi[type].choose.push($scope.nomi[type].candidates[idx]);
						$scope.nomi[type].candidates.splice(idx, 1);
						$scope.candidatesTable[type].reload();
					};
				} ]);

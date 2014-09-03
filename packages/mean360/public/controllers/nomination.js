'use strict';

angular.module('mean.mean360').controller(
  'NominationController',
  [ '$scope', '$http', 'Global', 'Nomination', 'ngTableParams',
    function($scope, $http, Global, Nomination, NgTableParams) {
      $scope.global = Global;
      $scope.package = {
        name: 'nomination'
      };

      $scope.rating = 3;
      
      $http.get('related_users').success(function(data) {
        $scope.nomi = [
          {
            name: '上司',
            add: false,
            choose: [],
            candidates: data.parent,
            maxNum: 1
          },
          {
            name: '同事',
            add: false,
            choose: [],
            candidates: data.siblings,
            maxNum: 5
          },
          {
            name: '下属',
            add: false,
            choose: [],
            candidates: data.children,
            maxNum: 5
          }
        ];

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

        $scope.canAdd = function(type) {
          var group = $scope.nomi[type];
          return group.choose.length < group.maxNum;
        };

        $scope.canShow = function(type) {
          return $scope.nomi[type].add;
        };

        $scope.show = function(type) {
          $scope.nomi[type].add = !$scope.nomi[type].add;
        };

        $scope.isFinish = false;

        $scope.finish = function() {
          $scope.isFinish = !$scope.isFinish;
          var nominators = [];
          for(var i = 0; i < $scope.nomi.length; ++i) {
            for(var j = 0; j < $scope.nomi[i].choose.length; ++j) {
              nominators.push($scope.nomi[i].choose[j]._id);
            }
          }
          $http.post('choose_nominators', nominators).success(function(data) {

          })
        };

        $scope.delCandidate = function(idx, type) {
          $scope.nomi[type].candidates.push($scope.nomi[type].choose[idx]);
          $scope.nomi[type].choose.splice(idx, 1);
          $scope.candidatesTable[type].reload();
        };

        $scope.addCandidate = function(idx, type) {
          $scope.nomi[type].choose.push($scope.nomi[type].candidates[idx]);
          $scope.nomi[type].candidates.splice(idx, 1);
          $scope.candidatesTable[type].reload();
        };

      });


    } ]);

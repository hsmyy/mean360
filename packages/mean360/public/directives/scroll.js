'use strict';

angular.module('mean.mean360').directive('scrollshow', [ '$window', function($window){
	return {
		restrict: 'A',
		link: function (scope, element, attrs){
			var windows = angular.element($window);
			var raw = element[0];
			var scrollThrehold = parseInt(attrs.scrollshow);
			raw.style.visibility = 'hidden';
			windows.bind('scroll', function () {
				var scrollY = $window.scrollY;
				if(scrollThrehold < scrollY){
					raw.style.visibility= 'visible';
				}else{
					raw.style.visibility = 'hidden';
				}
			});
		}
	};
}]);
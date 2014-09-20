var confessionsApp = angular.module('confessions', ['ngRoute','confessionControllers']);

confessionsApp.controller('NavController', function($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

confessionsApp.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/post', {
					templateUrl: '/res/post.html',
					controller: 'postController'
				}).
				when('/rules', {
					templateUrl: '/res/rules.html',
					controller: 'postController'
				}).
				when('/about', {
					templateUrl: '/res/about.html',
					controller: 'postController'
				}).
				otherwise({
					redirectTo: '/post'
				});
		}]);

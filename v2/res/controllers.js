var confessionControllers = angular.module('confessionControllers', []);

confessionControllers.controller('postController', function($scope) {
	$scope.confession = "";
	$scope.postConfession = function() {
		alert($scope.confession);
		$scope.confession="";
	};
});

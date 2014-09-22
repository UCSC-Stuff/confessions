var confessionControllers = angular.module('confessionControllers', []);

confessionControllers.controller('postController', function($scope, $http) {
	$scope.confession = "";
	$scope.postConfession = function() {
		var post = $http({
			method: "post",
			url: "/post",
			params: {
				confession: $scope.confession
			}
		});
		post.then(function(){
			$scope.confession="";
			alert("Thank you for your submission!");
		}, function() {
			$scope.confession="ERROR";
		});
	};
});

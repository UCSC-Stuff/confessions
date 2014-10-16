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

confessionControllers.controller('searchController', function($scope, $http) {
	$scope.query="";
	$scope.moreResults=true;
	$scope.results=[];
	var query;
	$scope.search = function(){
		query = $scope.query
		$http({
			method: "GET",
			url: "/rawsearch",
			params: {
				query: query
			}
		}).then(function(data){
			$scope.results = data.data;
			if(data.data.length != 25){
				$scope.moreResults = false;
			}else{
				$scope.moreResults = true;
			}
			i = 1;
		});
	};
	var i = 0;
	$scope.appendSearch = function(){
		$http({
			method: "GET",
			url: "/rawsearch",
			params: {
				query: query,
				page: i	
			}
		}).then(function(data){
			var size = data.data.length;
			if(size != 25){
				$scope.moreResults = false;
			}
			var start = i*25;
			for(var x = 0; x < size; x++){
				$scope.results[start+x] = data.data[x];
			}
			i++;
		});
	};
	$scope.search();
});

confessionControllers.directive('enterSubmit', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
       
        elem.bind('keydown', function(event) {
          var code = event.keyCode || event.which;
                  
          if (code === 13) {
            if (!event.shiftKey) {
              event.preventDefault();
              scope.$apply(attrs.enterSubmit);
            }
          }
        });
      }
    }
  });

var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

//Register form controller
app.controller('registerCtrl', function($scope,$http,$window) {
	console.log("initalize the controller");
	$scope.studentregistrationform = function() {
		console.log("data recieved"+$scope.user);
		
		if ($scope.studentform) {
			
			$http({
				method : "POST",
				url : "/api/student/",
				data:$scope.user
			}).then(function(response) {
				alert("save");		        
			},function(response) {			
				$scope.error = response.data;
			});
		} else{
			console.log("Invalid")		
			return;
		} 
	}; 
	$scope.getboardList = function() {
		console.log("function calling or  not");
			$http({
				method : "GET",
				url : "/api/board/",
			}).then(function(response) {

				$scope.boards = response.data;
				console.log("borad"+JSON.stringify($scope.boards));
						
			},function(response) {			
				$scope.error = response.data;
			});
		};
		
	$scope.getstandardList = function() {
			$http({
				method : "GET",
				url : "/api/standard/",
			}).then(function(response) {
				$scope.standards = response.data;
				console.log("standards"+JSON.stringify($scope.standards));
			},function(response) {			
				$scope.error = response.data;
			});
		};
	
    $scope.getboardList()
    $scope.getstandardList()

});
var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

//Register form controller
app.controller('registerCtrl', function($scope,$http,$window) {
	console.log("intial controller");
	$scope.registrationform = function() {
		console.log("data"+JSON.stringify($scope.user));
		if ($scope.facultyform.$valid) {
			console.log("data"+JSON.stringify($scope.user));
			$http({
				method : "POST",
				url : "/api/faculty/",
				data:$scope.user
			}).then(function(response) {
				$scope.success = "sdvsd"
				$scope.user={}
	        
			},function(response) {			
				$scope.username_error = response.data.username;
				$scope.mobile_error = response.data.mobile_no;
			});
		} else{
			console.log("Invalid")		
			return;
		} 
	}; 
	
});

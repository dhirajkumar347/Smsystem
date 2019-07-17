var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

//Register form controller
app.controller('registerController', function($scope,$http,$window) {
	console.log("intial controller");
	$scope.registrationform = function() {
		console.log("data"+JSON.stringify($scope.user));
		if ($scope.Applicationform.$valid) {
			console.log("data"+JSON.stringify($scope.user));
			$http({
				method : "POST",
				url : "/api/applicationForm_registration/",
				data:$scope.user
			}).then(function(response) {
				$scope.success = "sdvsd"
				$scope.user={}
	        
			},function(response) {			
				$scope.Email_error = response.data.Email_id;
				$scope.mobile_error = response.data.mobile_no;
			});
		} else{
			console.log("Invalid")		
			return;
		} 
	}; 
	
});

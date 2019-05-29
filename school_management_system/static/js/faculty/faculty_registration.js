var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

//Register form controller
app.controller('registerCtrl', function($scope,$http,$window) {
	$scope.registrationform = function() {
		
		if ($scope.facultyform) {
			console.log("data"+JSON.stringify($scope.user.pincode));
			$http({
				method : "POST",
				url : "/api/register",
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
	
});
var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

//Register form controller
app.controller('registerCtrl', function($scope,$http,$window) {
	$scope.studentregistrationform = function() {
		
		if ($scope.studentform) {
			
			$http({
				method : "POST",
				url : "/api/student_register",
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

var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

//Register form controller
app.controller('Ctrl', function($scope,$http,$window) {
	$scope.loginformsubmit = function(isValid) {
	
		if (isValid) {
			$http({
				method : "POST",
				url : "/app/login/",
				data:$scope.login
			}).then(function(response) {
				data = response.data
				console.log(data);
				$window.location.href = "http://127.0.0.1:8000/app/dashboard/#!/"+"?username="+data.username;		        
			},function(response) {			
				$scope.error = response.data;
			});
		} else{
			console.log("Invalid")		
			return;
		} 
	}; 
	
});
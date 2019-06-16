var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

//Register form controller
app.controller('loginCtrl', function($scope,$http,$window) {
	console.log("intial controller");
	$scope.loginformsubmit = function() {
	console.log("data"+JSON.stringify($scope.user));
		if ($scope.loginform.$valid) {
			$http({
				method : "POST",
				url : "/app/login/",
				data:$scope.user
			}).then(function(response) {
					data = response.data
				if(data.username == undefined){
					$scope.success ="Username and password does not exist";	
				} else{
					$window.location.href = "http://127.0.0.1:8000/app/dashboard/#!/"+"?username="+data.username;
				}		        
			},function(response) {			
				$scope.username_error = response.data.username;
			});
		} else{
			console.log("Invalid")		
			return;
		} 
	}
}); 
	
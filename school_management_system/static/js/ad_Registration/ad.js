var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);
//Register form controller
app.controller('adminregisterCtrl', function($scope,$http,$window) {
	console.log("initialize the controller")
		$scope.adminregistrationsubmitform = function() {
			console.log("data"+JSON.stringify($scope.admin));
   			if ($scope.adminform.$valid) {
                   
                      $http({
						method : "POST",
						url : "/api/admin/",
						data:$scope.admin
			}).then(function(response) {
				
				alert("admin login") 
				console.log("login in to the admin")
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

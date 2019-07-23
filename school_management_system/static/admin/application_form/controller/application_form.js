var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

app.controller('application_formController', function($scope, $http,$window){
  console.log("initialize the controller")

   $scope.admission_fee = function() {
        
   		
   			 $http({
						method : "GET",
						url : "/api/application_form/",
						
			}).then(function(response) { 
        $scope.admission_fees=response.data
        
               
				       
			},function(response) {		
				$scope.error = response.data
				
			});
    }
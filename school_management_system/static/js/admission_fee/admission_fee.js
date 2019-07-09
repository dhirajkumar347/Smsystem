var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

app.controller(admission_feeController, function($scope, $http,$window){

   $scope.admission_fee = function() {
   		
   			 $http({
						method : "GET",
						url : "/api/admission_fee/",
						
			}).then(function(response) { 
        $scope.admission_fees=response.data
        
               
				       
			},function(response) {		
				$scope.error = response.data
				
			});
					
                } 
                $scope.admission_fee()
            }

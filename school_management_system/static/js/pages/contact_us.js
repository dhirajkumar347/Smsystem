var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);
//Register form controller
app.controller('contCtrl', function($scope,$http,$window) {
		$scope.submitform = function() {
			console.log("ss"+contact_usForm);

		
                if ($scope.contact_usForm.$valid) {
                   var contact_us = JSON.stringify($scope.contact_us);
                      $http({
						method : "POST",
						url : "/api/contact_us/",
						data:contact_us
			}).then(function(response) {
				console.log("query worked") 
				alert("Query is delivered .we will contact you soon") 
			},function(response) {		
				$scope.error = response.data.Email_id;
				$scope.esaefsefrror = response.data.mobile_number;
				//$scope.error= response.data.mobile_number;
			});
			// },function(response) {		
			// 	$scope.error = response.data.mobile_number;
			// });               

                        
                } else{
                        console.log("Invalid")                
                        return;
                }
        };
	
})


 


		
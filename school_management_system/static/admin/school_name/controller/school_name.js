'use strict';
app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

function school_nameController($scope, $http, $window) {
    
//     $scope.submit_school_name = function() {
//     console.log("initalize the controller");
//     var school_name = $scope.school_name;
//         var json_data= {"school_name":school_name};
//         var final_json_data = JSON.stringify(json_data);
        
        
       
        
//         $http({
//             method: "POST",
//             url: "/api/admission_fee/",
//             data: final_json_data,
//         }).then(function(response) {
//             console.log("initalize the controller"+1234);
//             $scope.success = "school_name field successfully updated";

//         }, function(response) {
        

//             $scope.error = response.data

//         })
// }
   $scope.school_name = function() {
        
             $http({
                        method : "GET",
                        url : "/api/admission_fee/",
                        
            }).then(function(response) { 
        $scope.success=response.data

        
         
               
                       
            },function(response) {      
                $scope.error = response.data
                
            });
                    
                } 
                $scope.school_name()
            }


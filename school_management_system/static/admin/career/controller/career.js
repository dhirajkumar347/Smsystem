'use strict';
app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

function careerController($scope, $http, $window) {
    
    $scope.submit_career = function() {
    console.log("initalize the controller");
        var key_skill = $scope.key_skill;
        var job_description=$scope.job_description;
        var experience=$scope.experience;
        var employeement_type=$scope.employeement_type;
        var number_of_vacancy=$scope.number_of_vacancy
        
        var json_data= {"key_skill":key_skill,"job_description":job_description,"experience":experience,"employeement_type":employeement_type,"number_of_vacancy":number_of_vacancy};
        var final_json_data = JSON.stringify(json_data);
        
        $http({
            method: "POST",
            url: "/api/career/",
            data: final_json_data,
        }).then(function(response) {
            console.log("initalize the controller"+1234);
            $scope.success = "career field successfully updated";

        }, function(response) {
        

            $scope.error = response.data

        })
}
   $scope.career = function() {
        
             $http({
                        method : "GET",
                        url : "/api/career/",
                        
            }).then(function(response) { 
        $scope.careers=response.data
         $scope.career();
         
               
                       
            },function(response) {      
                $scope.error = response.data
                
            });
                    
                } 
                $scope.career()
            }


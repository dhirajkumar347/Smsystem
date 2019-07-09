'use strict';
app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

function admission_feeController($scope, $http, $window) {
    console.log("initalize the controller");
  
    $scope.create = function() {
    console.log("initalize the controller");
        var admission_fee = $scope.admission_fee;
        var monthly_fee=$scope.monthly_fee
        var bus_fee=$scope.bus_fee
        
        var json_data= {"admission_fee":admission_fee,"monthly_fee":monthly_fee,"bus_fee":bus_fee};
        var final_json_data = JSON.stringify(json_data);
        
        $http({
            method: "POST",
            url: "/api/admission_fee/",
            data: final_json_data,
        }).then(function(response) {
            $scope.success = " admission content created successfully";
        }, function(response) {
        

            $scope.error = response.data

        })
}
}

    
     
 


    



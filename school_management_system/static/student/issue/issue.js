'use strict';
app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

function issueController($scope, $http, $window) {
    console.log("initalize the controller");
  
    $scope.submit_issue = function() {
    console.log("initalize the controller");
        var query = $scope.issue_content;
        var mobile_number=$scope.mobile_number
        
        var json_data= {"query":query,"mobile_no":mobile_number};
        var final_json_data = JSON.stringify(json_data);
        
        $http({
            method: "POST",
            url: "/api/issue/",
            data: final_json_data,
        }).then(function(response) {
            $scope.success = " issue content created successfully";
        }, function(response) {
        

            $scope.error = response.data

        })
}
}

    
     
 


    



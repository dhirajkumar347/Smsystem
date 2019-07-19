'use strict';
app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

function admission_feeController($scope, $http, $window) {
    console.log("initalize the controller");
    $scope.isform = false;
  
    $scope.admission = function() {
    console.log("initalize the controller");

        var admission_fee = $scope.admission_fee;
        var monthly_fee=$scope.monthly_fee;
        var bus_fee=$scope.bus_fee;
        
        var extra_curricular_activities_fee=$scope.extra_curricular_activities_fee;
        var json_data= {"admission_fee":admission_fee,"monthly_fee":monthly_fee,"bus_fee":bus_fee,"extra_curricular_activities_fee":extra_curricular_activities_fee};
        var standard_id =JSON.stringify($scope.standard_name,$scope.standard_id);
        var extra_curricular_activities_id =JSON.stringify($scope.extra_curricular_activities_types,$scope.extra_curricular_activities_id);

       var final_data= JSON.stringify(json_data)
        final_data["standard_name"] = standard_id;
        final_data["extra_curricular_activities_types"] = extra_curricular_activities_id;
        
        
        
        $http({
            method: "POST",
            url: "/api/admission_fee/",
            data: final_data,
        }).then(function(response) {
            $scope.success = " admission content created successfully";
        }, function(response) {
        

            $scope.error = response.data

        })
}
$scope.DropDownChnaged = function () {
    if($scope.dropValue == '1to3'){
         $scope.isform = true;
          $scope.isformextra = true;
          $scope.isformextrafee=true;

           console.log("data"+$scope.dropValue);
       }else{
           $scope.isform = true;
             $scope.isformextra = false;
             $scope.isformextrafee=false;
       }
    }; 

$scope.getstandardList = function() {
            $http({
                method : "GET",
                url : "/api/standard/",
            }).then(function(response) {
                $scope.standards = response.data;
                console.log("standards"+JSON.stringify($scope.standards));
            },function(response) {          
                $scope.error = response.data;
            });
        };

$scope.getextra_curricular_activitiesList=function(){
            $http({
                method : "GET",
                url : "/api/extra_curricular_activities/",
            }).then(function(response) {
                $scope.extra_curricular_activitiess = response.data;
                console.log("extra_curricular_activitiess"+JSON.stringify($scope.extra_curricular_activitiess));
            },function(response) {          
                $scope.error = response.data;
            });
        };

        $scope.getstandardList();
        $scope.getextra_curricular_activitiesList();

    }

    
     
 


    



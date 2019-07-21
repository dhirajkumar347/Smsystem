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
    //var id=$scope.standard_name.standard_id;
    var fee_data = JSON.stringify($scope.student_fee);
    var final_data= JSON.parse(fee_data)
    //final_data["standard_name"] = id;
    if(typeof $scope.extra_curricular_activities_types!="undefined"){
        var extra_cur_id = $scope.extra_curricular_activities_types.extra_curricular_activities_id
         final_data["extra_curricular_activities_types"] = extra_cur_id;
         final_data['extra_curricular_activities_fee'] =$scope.extra_curricular_activities_fee
    } 
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

/*$scope.getstandardList = function() {
            $http({
                method : "GET",
                url : "/api/standard/",
            }).then(function(response) {
                $scope.standards = response.data;
                console.log("standards"+JSON.stringify($scope.standards));
            },function(response) {          
                $scope.error = response.data;
            });
        };*/

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

       // $scope.getstandardList();
        $scope.getextra_curricular_activitiesList();

    }

    
     
 


    



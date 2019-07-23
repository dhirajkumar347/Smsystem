var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

app.controller('contCntrl', function($scope, $http,$window){
  console.log("initialize the controller")

   $scope.admission_fee = function() {
        if(typeof $scope.extra_curricular_activities_types!="undefined"){
        var extra_cur_id = $scope.extra_curricular_activities_types.extra_curricular_activities_id
         final_data["extra_curricular_activities_types"] = extra_cur_id;
         final_data['extra_curricular_activities_fee'] =$scope.extra_curricular_activities_fee
    }
   		
   			 $http({
						method : "GET",
						url : "/api/admission_fee/",
						
			}).then(function(response) { 
        $scope.admission_fees=response.data
        
               
				       
			},function(response) {		
				$scope.error = response.data
				
			});
    }
    $scope.DropDownChnaged = function () {
    if($scope.dropValue == '1to3'){
        if($scope.dropValue == '1to3'){
        $scope.isform = true;
        $scope.isformextra = true;
        $scope.isformextrafee=true;
        $scope.isextra_curricular_activities = false;

           console.log("data"+$scope.dropValue);
       }else{
           $scope.isform = true;
             $scope.isformextra = false;
             $scope.isformextrafee=false;
       }
    }; 
  }
                $scope.admission_fee()
            });

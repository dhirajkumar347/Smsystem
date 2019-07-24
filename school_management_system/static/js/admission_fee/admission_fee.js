var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

app.controller('contCntrl', function($scope, $http,$window){
  console.log("initialize the controller");
  $scope.isform = true;
    $scope.isformextrafee=false;
        $scope.isextra_curricular_activities = false;
     
    $scope.admission_fee = function () {
      console.log($scope.value);
       $http.get("/api/admission_fee?standard_name=" +$scope.value).then(  
                       function (response) {  
                            $scope.Admission_Fee = response.data;
                           $scope.add_fee =  $scope.Admission_Fee[0].admission_fee;
                           $scope.monthly_fee = $scope.Admission_Fee[0].monthly_fee;
                           $scope.bus_fee = $scope.Admission_Fee[0].bus_fee;
                            $scope.extra_curricular_activities_types = $scope.Admission_Fee[0].extra_curricular_activities_types
                           // $scope.extra_curricular_activities_fee = $scope.Admission_Fee[0].extra_curricular_activities_fee

                            console.log(JSON.stringify($scope.Admission_Fee));

                          
                       }, function (err) {  
                           var error = err;  
                       });

   
  }
                
                
            });

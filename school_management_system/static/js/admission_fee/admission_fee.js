var app = angular.module("qlsApp", []);

app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

app.controller('contCntrl', function($scope, $http,$window){
  $scope.istablehide = false;
    $scope.isformextrafee=false;
        $scope.isextra_curricular_activities = false;
     
    $scope.admission_fee = function () {

      console.log($scope.value);

       $http.get("/api/admission_fee?standard_name=" +$scope.value).then(  
         // $scope.isformextrafee=true;
                       function (response) {  
                        $scope.istablehide=true;
                        // $scope.school_name= $scope.admission_fee.school_name;
                            $scope.admission_fee = response.data;

                             console.log(JSON.stringify($scope.admission_fee));

                           $scope.add_fee =  $scope.admission_fee[0].admission_fee;
                           $scope.monthly_fee = $scope.admission_fee[0].monthly_fee;
                           $scope.bus_fee = $scope.admission_fee[0].bus_fee;
                           $scope.school_name= $scope.admission_fee.school_name;
                            
                            
                            // console.log(JSON.stringify($scope.admission_fee));

                          
                       }, function (err) {  
                           var error = err;  
                       });

   
  }
   
              
            });

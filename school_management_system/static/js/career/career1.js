
var angularApp = angular.module("qlsApp", ['ui.bootstrap']);

angularApp.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

angularApp.controller('ListDashboardCtrl', function($scope,$http,$window,$location) {  
  
    $scope.getcareers = function () { 
        $http.get("/api/career?page=" + $scope.pageIndex).then(  
                       function (response) {  
                            $scope.careers = response.data;
                           $scope.totalCount = response.data.totalCount;  
                       },  
                       function (err) {  
                           var error = err;  
                       });  
    }  


    $scope.get_careerinformation = function (id) { 
        $http.get("/api/career/"+id).then(  
                       function (response) {  
                            $scope.job_description = response.data;
                           console.log("information"+JSON.stringify($scope.job_description));
                       },  
                       function (err) {  
                           var error = err;  
                       });  
    }  
    $scope.get_careerapplicationform=function(){
      window.location.href="http://127.0.0.1:8000/app/applicationForm_registration/"
      
    }
     $scope.getcareers();  
  
});



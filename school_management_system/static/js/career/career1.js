
var angularApp = angular.module("qlsApp", ['ui.bootstrap']);

angularApp.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

//https://www.c-sharpcorner.com/article/server-side-pagination-using-angularjs-web-api-and-sql-server/
angularApp.controller('ListDashboardCtrl', function($scope,$http,$window,$location) {
    //$scope.maxSize = 1;     // Limit number for pagination display number.  
    //$scope.totalCount = 0;  // Total number of items in all pages. initialize as a zero  
      // Current page number. First page is 1.-->  
    //$scope.pageSizeSelected = 5; // Maximum number of items per page.  
  
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


  
    //Loading FacultyList list on first time  
     $scope.getcareers();  
  
    //This method is calling from pagination number  
    $scope.pageChanged = function () {
     $scope.pageIndex =  $scope.pageIndex+1   
        $scope.getFacultyList();  
    };  
     $scope.pageChanged1 = function () {
     $scope.pageIndex =  $scope.pageIndex-1   
        $scope.getFacultyList();  
    }; 
});



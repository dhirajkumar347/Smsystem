
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
    $scope.pageIndex = 1;   // Current page number. First page is 1.-->  
    //$scope.pageSizeSelected = 5; // Maximum number of items per page.  
  
    $scope.getFacultyList = function () { 
        $http.get("/api/facultys?page=" + $scope.pageIndex).then(  
                       function (response) {  
                            $scope.facultyList = response.data;
                           $scope.totalCount = response.data.totalCount;  
                       },  
                       function (err) {  
                           var error = err;  
                       });  
    }  


    $scope.get_facultyinformation = function (id) { 
        $http.get("/api/facultys/"+id).then(  
                       function (response) {  
                            $scope.faculty_information = response.data;
                           console.log("information"+JSON.stringify($scope.faculty_information));
                       },  
                       function (err) {  
                           var error = err;  
                       });  
    }  


  
    //Loading FacultyList list on first time  
     $scope.getFacultyList();  
  
    //This method is calling from pagination number  
    $scope.pageChanged = function () {
     $scope.pageIndex =  $scope.pageIndex+1   
        $scope.getFacultyList();  
    };  
     $scope.pageChanged1 = function () {
     $scope.pageIndex =  $scope.pageIndex-1   
        $scope.getFacultyList();  
    }; 

     $scope.search_faculty = function () {
      if($scope.full_name == undefined){
      alert("Please put faculty name inside input Box");
      }else{
          $http.get("/api/search?faculty_name=" + $scope.full_name).then(  
                       function (response) {  
                             $scope.CustomerList = response.data;
                            if (response.data.length == 0){
                               console.log("data"+JSON.stringify($scope.CustomerList.length));
                              $scope.message = "This facultys is not present";
                            } else{
                                $scope.teacher_name = response.data;
                            }
                           
                       },  
                       function (err) {  
                           var error = err;  
                       });  

      }
    
    };  

});

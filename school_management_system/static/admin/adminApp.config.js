var app = angular.module('adminApp', ['ngRoute','ngTable','ngTouch','ui.bootstrap']);
app.config(['$httpProvider', '$interpolateProvider',''
    function($httpProvider, $interpolateProvider) {    
    /* csrf */
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : "/static/admin/dashboard/view/dashboard.html",
     controller:  ["$scope", "$http","$window", DashboardController],
  })
 
  .when('/notification', {
    templateUrl : "/static/admin/notification/view/notification.html",
     controller:  ["$scope", "$http","$window","NgTableParams",'$confirm', adminnotificationController],
  })
  // .when('/board',{
  //   templateUrl : "/static/admin/board/view/board.html",
  //    controller:  ["$scope", "$http","$window", boardController],

  // })
  // .when('/standard',{
  //   templateUrl : "/static/admin/standard/view/standard.html",
  //    controller:  ["$scope", "$http","$window", standardController],

  // })
  // .when('/allStudents',{
  //   templateUrl : "/static/admin/allStudents/view/allStudents.html",
  //    controller:  ["$scope", "$http","$window", allStudentsController],

  // })
  // .when('/allFaculty',{
  //   templateUrl : "/static/admin/allFaculty/view/allFaculty.html",
  //    controller:  ["$scope", "$http","$window", allFacultyController],

  // })*/
  // /*.
  // when('/profile', {
  //   templateUrl : "/static/student/profile/view/profile.html",
  //   controller:  ["$scope", "$http", ProfileController],
  // })*/
  .otherwise({redirectTo: '/'});
});
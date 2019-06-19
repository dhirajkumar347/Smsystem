var app = angular.module('adminApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : "/static/admin/dashboard/view/dashboard.html",
     controller:  ["$scope", "$http","$window", DashboardController],
  })
  .when('/issue', {
    templateUrl : "/static/admin/issue/view/issue.html",
     controller:  ["$scope", "$http","$window", issueController],
  })
  .when('/notification', {
    templateUrl : "/static/admin/notification/view/notification.html",
     controller:  ["$scope", "$http","$window", notificationController],
  })
  .when('/board',{
    templateUrl : "/static/admin/board/view/board.html",
     controller:  ["$scope", "$http","$window", boardController],

  })
  .when('/standard',{
    templateUrl : "/static/admin/standard/view/standard.html",
     controller:  ["$scope", "$http","$window", standardController],

  })
  .when('/board',{
    templateUrl : "/static/admin/allStudents/view/allStudents.html",
     controller:  ["$scope", "$http","$window", allStudentsController],

  })
  .when('/board',{
    templateUrl : "/static/admin/allFaculty/view/allFaculty.html",
     controller:  ["$scope", "$http","$window", allFacultyController],

  })
  /*.
  when('/profile', {
    templateUrl : "/static/student/profile/view/profile.html",
    controller:  ["$scope", "$http", ProfileController],
  })*/
  .otherwise({redirectTo: '/'});
});
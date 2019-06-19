var app = angular.module('studentApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : "/static/student/dashboard/view/dashboard.html",
     controller:  ["$scope", "$http","$window", DashboardController],
  })
  .when('/issue', {
    templateUrl : "/static/student/issue/isuue.html",
     controller:  ["$scope", "$http","$window", issueController],
  })
  .when('/notification', {
    templateUrl : "/static/student/notification/notification.html",
     controller:  ["$scope", "$http","$window", notificationController],
  })
  /*.
  when('/profile', {
    templateUrl : "/static/student/profile/view/profile.html",
    controller:  ["$scope", "$http", ProfileController],
  })*/
  .otherwise({redirectTo: '/'});
});
var app = angular.module('studentApp', ['ngRoute','ngTable','ui.bootstrap']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : "/static/student/dashboard/view/dashboard.html",
     controller:  ["$scope", "$http","$window", DashboardController],
  })
  .when('/issue', {
    templateUrl : "/static/student/issue/isuue.html",
     controller:  ["$scope", "$http","$window","$uibModal","$controller","NgTableParams", issueController],
  })
  .when('/notification', {
    templateUrl : "/static/student/notification/notification.html",
     controller:  ["$scope", "$http","$window","$uibModal","$controller","NgTableParams", notificationController],
  })
  /*.
  when('/profile', {
    templateUrl : "/static/student/profile/view/profile.html",
    controller:  ["$scope", "$http", ProfileController],
  })*/
  .otherwise({redirectTo: '/'});
});
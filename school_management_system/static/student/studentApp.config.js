var app = angular.module('studentApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : "/static/student/dashboard/view/dashboard.html",
     controller:  ["$scope", "$http","$window", DashboardController],
  }).
  when('/profile', {
    templateUrl : "/static/student/profile/view/profile.html",
    controller:  ["$scope", "$http", ProfileController],
  })
  .otherwise({redirectTo: '/'});
});
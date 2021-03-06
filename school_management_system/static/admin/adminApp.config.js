var app = angular.module('adminApp', ['ngRoute','ngTable','ui.bootstrap', 'mwl.confirm','ngSanitize']);
app.config(['$httpProvider', '$interpolateProvider',
    function($httpProvider, $interpolateProvider) {    
 
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
     controller:  ["$scope", "$http","$window","$uibModal","$controller","NgTableParams", adminnotificationController],
  })
  .when('/board', {
    templateUrl : "/static/admin/board/view/board.html",
     controller:  ["$scope", "$http","$window","$uibModal","$controller","NgTableParams",adminboardController],

  })
  .when('/standard',{
    templateUrl : "/static/admin/standard/view/standard.html",
     controller:  ["$scope", "$http","$window","$uibModal","$controller","NgTableParams", adminstandardController],

  })
  .when('/admission_fee',{
    templateUrl : "/static/admin/admission_fee/view/admission_fee.html",
     controller:  ["$scope", "$http","$window", admission_feeController],

  })
  .when('/career',{
    templateUrl : "/static/admin/career/view/career.html",
     controller:  ["$scope", "$http","$window", careerController],

  }).when('/school_name',{
    templateUrl : "/static/admin/school_name/view/school_name.html",
     controller:  ["$scope", "$http","$window","$uibModal","$controller", school_nameController],

  })
  .when('/extra_curricular_activities',{
    templateUrl : "/static/admin/extra_curricular_activities/view/extra_curricular_activities.html",
     controller:  ["$scope", "$http","$window","$uibModal","$controller","NgTableParams", extra_curricular_activitiesController],

  })


  
  
  
   
  .otherwise({redirectTo: '/'});
});
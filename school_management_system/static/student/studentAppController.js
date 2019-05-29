'use strict';

angular.module("studentApp").controller("studentAppController", ["$scope", "$http","$window",function ($scope, $http,$window) {

	  console.log("load")
   var y =$window.location.href;
    var mydat =y.substr(49);

    $scope.resumeQuiz=function(){
    	 $http({
            url: "/api/student/?username="+mydat,
            method: "GET",
            headers: { "Content_type": "apllication/json"}
        }).then(function (response) {
            $scope.abc = response.data;
            console.log("jkh"+$scope.abc);
        },function (error) {
            console.log(error);
        });
    };
     
 $scope.resumeQuiz();
}]);
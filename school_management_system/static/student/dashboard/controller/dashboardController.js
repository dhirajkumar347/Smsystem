'use strict';

function DashboardController($scope, $http,$window){
  console.log("loasdcdscdsd")
   var y =$window.location.href;
    var mydat =y.substr(49);
    //Available Program
    function getProfileinfo() {

        $http({
            url: "/api/student/?username="+mydat,
            method: "GET",
            headers: { "Content_type": "apllication/json"}
        }).then(function (response) {
            $scope.studentProfile = response.data;
            console.log($scope.studentProfile);
        },function (error) {
            console.log(error);
        });
    };

getProfileinfo();
};
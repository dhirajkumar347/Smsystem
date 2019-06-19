'use strict';

function DashboardController($scope, $http,$window){
  console.log("load")
   var y =$window.location.href;
    var mydat =y.substr(49);
    //Available Program
    function getProfileinfo() {

        $http({
            url: "/api/admin/?username="+mydat,
            method: "GET",
            headers: { "Content_type": "apllication/json"}
        }).then(function (response) {
            $scope.adminProfile = response.data;
            console.log($scope.adminProfile);
        },function (error) {
            console.log(error);
        });
    };

getProfileinfo();
};
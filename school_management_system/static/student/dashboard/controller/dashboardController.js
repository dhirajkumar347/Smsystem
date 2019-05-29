'use strict';

function DashboardController($scope, $http,$window){
  console.log("intial loading");
   var y =$window.location.href;
    var mydat =y.substr(49);
    //Available Program
    function getProgramList() {

        $http({
            url: "/api/student/?username="+mydat,
            method: "GET",
            headers: { "Content_type": "apllication/json"}
        }).then(function (response) {
            $scope.studentProgramList = response.data;
            console.log($scope.studentProgramList);
        },function (error) {
            console.log(error);
        });
    };

getProgramList();
};
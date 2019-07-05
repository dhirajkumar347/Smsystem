'use strict';
"use strict";

app.controller("editModalController", function($scope, $uibModal, $http, $uibModalStack) {
   

   $scope.edit_issue = function() {
        
          var issue_dat =$scope.issue;
           var issue_obj= {"board_name":issue_dat};
           var final_edit_data = JSON.stringify(issue_obj);
           
            
        $http({
            method: "PUT",
            url: "/api/issue/"  + "/",
            data:final_edit_data
        }).then(function(response) {
            // $scope.board();
             $scope.success = "issue content changed ssuccessfully";
             // $scope.board();
        }, function(response) {
            $scope.error = response.data

        });

    }



    $scope.cancel = function() {
        $uibModalStack.dismissAll();

    }
});

function issueController($scope, $http, $window, $uibModal, $controller, NgTableParams) {
    console.log("initalize the controller");
    angular.extend(this, $controller('editModalController', {
        $scope: $scope
    }));
    // $scope.create = function() {
    
    //     var issue = $scope.issue;
    //     var json_data= {"board_name":board_name};
    //     var final_json_data = JSON.stringify(json_data);
    //     $http({
    //         method: "POST",
    //         url: "/api/board/",
    //         data: final_json_data
    //     }).then(function(response) {

    //        $scope.board();
    //     }, function(response) {
    //       $scope.error = response.data

    //     });


    // }

        
    $scope.issue = function() {
      console.log("controller");
        $http({
            method: "GET",
            url: "/api/issue/",
        }).then(function(response) {

            $scope.issue_list = response.data
            console.log("concxatthe "+$scope.issue_list)
            $scope.tableParams = new NgTableParams({}, {
                dataset: $scope.issue_list
            });

        }, function(response) {
            $scope.error = response.data

        });

    } 
     
       $scope.edit_issue_pop= function(issue) {
        console.log(issue);
        $scope.issue=issue;
        
        $uibModal.open({
            templateUrl: 'edit_modal.html',
            size: 'md',
            controller: 'editModalController',
            scope:$scope

        });
    }
    $scope.issue()
}
 
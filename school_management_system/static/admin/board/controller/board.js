"use strict";

app.controller("editModalController", function($scope, $uibModal, $http, $uibModalStack) {
   

   $scope.edit_board = function() {
        
          var board_dat =$scope.board;
           var board_obj= {"board_name":board_dat};
           var final_edit_data = JSON.stringify(board_obj);
           var edit_board_id =$scope.id;
            
        $http({
            method: "PUT",
            url: "/api/board/" + edit_board_id + "/",
            data:final_edit_data
        }).then(function(response) {
            // $scope.board();
             $scope.success = "Board content updated successfully";
             // $scope.board();
        }, function(response) {
            $scope.error = response.data

        });

    }



    $scope.cancel = function() {
        $uibModalStack.dismissAll();

    }
});

function adminboardController($scope, $http, $window, $uibModal, $controller, NgTableParams) {
    console.log("initalize the controller");
    angular.extend(this, $controller('editModalController', {
        $scope: $scope
    }));
    $scope.create = function() {
    
        var board_name = $scope.board_name;
        var json_data= {"board_name":board_name};
        var final_json_data = JSON.stringify(json_data);
        $http({
            method: "POST",
            url: "/api/board/",
            data: final_json_data
        }).then(function(response) {

           $scope.board();
        }, function(response) {
          $scope.error = response.data

        });


    }

        
    $scope.board = function() {
      console.log("controller");
        $http({
            method: "GET",
            url: "/api/board/",
        }).then(function(response) {

            $scope.board_list = response.data
            console.log("concxatthe "+$scope.board_list)
            $scope.tableParams = new NgTableParams({}, {
                dataset: $scope.board_list
            });

        }, function(response) {
            $scope.error = response.data

        });

    } 
     $scope.delete_board = function(board_id) {
        $http({
            method: "DELETE",
            url: "/api/board/" + board_id,
        }).then(function(response) {
            $scope.board();
        }, function(response) {
            $scope.error = response.data

        });

    }
       $scope.edit_board_pop= function(board_name,id) {
        console.log(board_name,id);
        $scope.board=board_name;
        $scope.id=id;
        $uibModal.open({
            templateUrl: 'edit_modal.html',
            size: 'md',
            controller: 'editModalController',
            scope:$scope

        });
    }
    $scope.board()
}
 
"use strict";

function adminboardController($scope, $http, $window, NgTableParams) {
    console.log("initalize the controller");


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

        })


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
    $scope.edit_notification = function(abc,board_id) {
      
    
         $scope.board_name =abc
         var board_obj= {"board_name": $scope.board_name};
         var final_edit_data = JSON.stringify(board_obj);
         
        console.log("check the data"+final_edit_data);
        $http({
            method: "PUT",
            url: "/api/board/" + board_id + "/",
            data:final_edit_data
        }).then(function(response) {
            $scope.board();
        }, function(response) {
            $scope.error = response.data

        });

    }
    $scope.board();
}

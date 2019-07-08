"use strict";

app.controller("boardModalController", function($scope, $uibModal, $http, $uibModalStack) {
     $scope.submit_board = function() {
    
        var board = $scope.board_name;
        var json_data= {"board_name":board};
        var final_json_data = JSON.stringify(json_data);
        $http({
            method: "POST",
            url: "/api/board/",
            data: final_json_data
        }).then(function(response) {

            $scope.success = "Board name created successfully";
             $scope.board();
        }, function(response) {
            
        
            //$scope.notifications();

            $scope.error = response.data

        })


    }
   

   $scope.edit_board = function() {
        
          var board_dat =$scope.board_name;
           var board_obj= {"board_name":board_dat};
           var final_edit_data = JSON.stringify(board_obj);
           var edit_board_id =$scope.id;
            
        $http({
            method: "PUT",
            url: "/api/board/" + edit_board_id + "/",
            data:final_edit_data
        }).then(function(response) {
             $scope.board();
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
    // console.log("initalize the controller");
    angular.extend(this, $controller('boardModalController', {
        $scope: $scope
    }));
     $scope.board = function() {
     
        $http({
            method: "GET",
            url: "/api/board/",
        }).then(function(response) {

            $scope.board_list = response.data
           
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
    $scope.create_board_pop = function() {
       $scope.Iscreate=true;
    
        $uibModal.open({
            templateUrl: 'board_modal.html',
            size: 'md',
            controller: 'boardModalController',
            scope:$scope

        });
    }
       $scope.edit_board_pop= function(board_name,id) {
         $scope.Iscreate=false;
        $scope.board_name=board_name;
        $scope.id=id;
        $uibModal.open({
            templateUrl: 'board_modal.html',
            size: 'md',
            controller: 'boardModalController',
            scope:$scope

        });
    }
    $scope.board()
}
 
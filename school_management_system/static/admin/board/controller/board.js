"use strict";
app.controller("boardModalController", function($scope, $uibModal, $http, $uibModalStack) {
    
    $scope.submit_board = function() {
    
        var board_window = $scope.board;
        var json_data= {"board_window":board_window};
        var final_json_data = JSON.stringify(json_data);
        $http({
            method: "POST",
            url: "/api/board/",
            data: final_json_data
        }).then(function(response) {

        	$scope.success = "message";
        }, function(response) {
            $scope.error = response.data

        })
    }
function adminboardController($scope, $http, $window, $uibModal, $controller) {
    // angular.extend(this, $controller('boardModalController', {
    //     $scope: $scope
    // }));
    $scope.board = function() {
        $http({
            method: "GET",
            url: "/api/board/",
        }).then(function(response) {
            $scope.board_list = response.data({},{
            $scope.tableParams = new NgTableParams({}, {
                dataset: $scope.board_list
            });

        }, function(response) {
            $scope.error = response.data

        };

    }

    

    // $scope.board_pop = function() {
    //     $uibModal.open({
    //         templateUrl: 'boardModal.html',
    //         size: 'md',
    //         controller: 'boardModalController',
    //         scope:$scope

    //     });
    // }
     

    $scope.board()

}
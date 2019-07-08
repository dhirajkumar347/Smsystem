"use strict";
app.controller("standardModalController", function($scope, $uibModal, $http, $uibModalStack) {
    
    $scope.submit_standard = function() {
    
        var standard_name = $scope.standard_name;
        var json_data= {"standard_name":standard_name};
        var final_json_data = JSON.stringify(json_data);
        $http({
            method: "POST",
            url: "/api/standard/",
            data: final_json_data
        }).then(function(response) {
        	$scope.success = "standard name created successfully";
        }, function(response) {
        	
        
        	//$scope.standard();

            $scope.error = response.data

        })


    }

    $scope.edit_standard = function() {
    	
    	  var standard_name_dat =$scope.standard_name;
    	   var standard_name_obj= {"standard_name":standard_name_dat};
    	   var final_edit_data = JSON.stringify(standard_name_obj);
           var edit_standard_id =$scope.id;
    		
        $http({
            method: "PUT",
            url: "/api/standard/" + edit_standard_id + "/",
            data:final_edit_data
        }).then(function(response) {
            $scope.standard();
            $scope.success = "standard_name  updated successfully";
        }, function(response) {
            $scope.error = response.data

        });

    }


    //close modal
    $scope.cancel = function() {
        $uibModalStack.dismissAll();

    }

    

});



function adminstandardController($scope, $http, $window, $uibModal, $controller, NgTableParams) {
    angular.extend(this, $controller('standardModalController', {
        $scope: $scope
    }));
    $scope.standard = function() {
        $http({
            method: "GET",
            url: "/api/standard/",
        }).then(function(response) {
            $scope.standard_list = response.data
            $scope.tableParams = new NgTableParams({}, {
                dataset: $scope.standard_list
            });

        }, function(response) {
            $scope.error = response.data

        });

    }

    $scope.delete_standard = function(standard_id) {
        $http({
            method: "DELETE",
            url: "/api/standard/" + standard_id,
        }).then(function(response) {
            $scope.standard();
        }, function(response) {
            $scope.error = response.data

        });

    }


    $scope.standard_pop = function() {
        $scope.Iscreate=true;
    
        $uibModal.open({
            templateUrl: 'standardModal.html',
            size: 'md',
            controller: 'standardModalController',
            scope:$scope

        });
    }
     $scope.edit_standard_pop= function(standard_name,id) {
        console.log("standard_name,id")
        $scope.Iscreate=false;
     	$scope.standard_name=standard_name;
     	$scope.id=id;
        $uibModal.open({
            templateUrl: 'standardModal.html',
            size: 'md',
            controller: 'standardModalController',
            scope:$scope

        });
    }

    $scope.standard()

}
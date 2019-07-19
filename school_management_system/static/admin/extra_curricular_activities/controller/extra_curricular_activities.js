"use strict";



app.controller("ecaModalController", function($scope, $uibModal, $http, $uibModalStack) {
     $scope.submit_extra_curricular_activities = function() {
    
        var extra_curricular_activities_types = $scope.extra_curricular_activities_types;
        var json_data= {"extra_curricular_activities_types":extra_curricular_activities_types};
        var final_json_data = JSON.stringify(json_data);
        $http({
            method: "POST",
            url: "/api/extra_curricular_activities/",
            data: final_json_data
        }).then(function(response) {

            $scope.success = "extra_curricular_activities  created successfully";
             $scope.extra_curricular_activities();
        }, function(response) {
            
        
            //$scope.notifications();

            $scope.error = response.data

        })


    }
   

   $scope.edit_extra_curricular_activities = function() {
        
          var eca_dat =$scope.extra_curricular_activities_types;
           var eca_obj= {"extra_curricular_activities_types":eca_dat};
           var final_edit_data = JSON.stringify(eca_obj);
           var edit_extra_curricular_activities_id =$scope.id;
            
        $http({
            method: "PUT",
            url: "/api/extra_curricular_activities/" + edit_extra_curricular_activities_id + "/",
            data:final_edit_data
        }).then(function(response) {
             $scope.extra_curricular_activities();
             $scope.success = "extra_curricular_activities updated successfully";
             // $scope.board();
        }, function(response) {
            $scope.error = response.data

        });

    }



    $scope.cancel = function() {
        $uibModalStack.dismissAll();

    }
});

function extra_curricular_activitiesController($scope, $http, $window, $uibModal, $controller, NgTableParams) {
    // console.log("initalize the controller");
    angular.extend(this, $controller('ecaModalController', {
        $scope: $scope
    }));
     $scope.extra_curricular_activities = function() {
     
        $http({
            method: "GET",
            url: "/api/extra_curricular_activities/",
        }).then(function(response) {

            $scope.extra_curricular_activities_list = response.data
           
            $scope.tableParams = new NgTableParams({}, {
                dataset: $scope.extra_curricular_activities_list
            });

        }, function(response) {
            $scope.error = response.data

        });

    } 
     $scope.delete_extra_curricular_activities = function(extra_curricular_activities_id) {
        $http({
            method: "DELETE",
            url: "/api/extra_curricular_activities/" + extra_curricular_activities_id,
        }).then(function(response) {
            $scope.extra_curricular_activities();
        }, function(response) {
            $scope.error = response.data

        });

    }
    $scope.extra_curricular_activities_pop = function() {
        $scope.Iscreate=true;
    
        $uibModal.open({
            templateUrl: 'extra_curricular_activities_modal.html',
            size: 'md',
            controller: 'ecaModalController',
            scope:$scope

        });
    }
       $scope.edit_extra_curricular_activities_pop= function(extra_curricular_activities_types,id) {
         $scope.Iscreate=false;
        $scope.extra_curricular_activities_types=extra_curricular_activities_types;
        $scope.id=id;
        $uibModal.open({
            templateUrl: 'extra_curricular_activities_modal.html',
            size: 'md',
            controller: 'ecaModalController',
            scope:$scope

        });
    }
    $scope.extra_curricular_activities()
}
 
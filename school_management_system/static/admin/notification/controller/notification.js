"use strict";
app.controller("notificationeModalController", function($scope, $uibModal, $http, $uibModalStack) {
    
    $scope.submit_notification = function() {
    
        var notification_window = $scope.notification;
        var json_data= {"notification_window":notification_window};
        var final_json_data = JSON.stringify(json_data);
        $http({
            method: "POST",
            url: "/api/notification/",
            data: final_json_data
        }).then(function(response) {
        	$scope.success = "Notification content created successfully";
        }, function(response) {
        	
        
        	//$scope.notifications();

            $scope.error = response.data

        })


    }

    $scope.edit_notification = function() {
    	
    	  var notification_dat =$scope.notification;
    	   var notification_obj= {"notification_window":notification_dat};
    	   var final_edit_data = JSON.stringify(notification_obj);
           var edit_notification_id =$scope.id;
    		
        $http({
            method: "PUT",
            url: "/api/notification/" + edit_notification_id + "/",
            data:final_edit_data
        }).then(function(response) {
            $scope.notifications();
            $scope.success = "Notification content updated successfully";
        }, function(response) {
            $scope.error = response.data

        });

    }


    //close modal
    $scope.cancel = function() {
        $uibModalStack.dismissAll();

    }

    $scope.reload_page = function(){
      location.reload();
         
    }

});



function adminnotificationController($scope, $http, $window, $uibModal, $controller, NgTableParams) {
    angular.extend(this, $controller('notificationeModalController', {
        $scope: $scope
    }));
    $scope.notifications = function() {
        $http({
            method: "GET",
            url: "/api/notification/",
        }).then(function(response) {
            $scope.notification_list = response.data
            $scope.tableParams = new NgTableParams({}, {
                dataset: $scope.notification_list
            });

        }, function(response) {
            $scope.error = response.data

        });

    }

    $scope.delete_notification = function(notification_id) {
        $http({
            method: "DELETE",
            url: "/api/notification/" + notification_id,
        }).then(function(response) {
            $scope.notifications();
        }, function(response) {
            $scope.error = response.data

        });

    }


    $scope.notification_pop = function() {
        $scope.Iscreate=true;
    
        $uibModal.open({
            templateUrl: 'notificationsModal.html',
            size: 'md',
            controller: 'notificationeModalController',
            scope:$scope

        });
    }
     $scope.edit_notification_pop= function(notification_window,id) {
        $scope.Iscreate=false;
     	$scope.notification=notification_window;
     	$scope.id=id;
        $uibModal.open({
            templateUrl: 'notificationsModal.html',
            size: 'md',
            controller: 'notificationeModalController',
            scope:$scope

        });
    }

    $scope.notifications()

}
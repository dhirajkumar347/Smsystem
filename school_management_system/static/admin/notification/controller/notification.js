"use strict";
app.controller("notificationeModalController", function ($scope, $uibModal, $http, $uibModalStack) {
    // create class model
    console.log("ne controller");
 // create class model
     $scope.submitnotificationwindow = function() {
                	var notification_window= JSON.stringify($scope.notification);
                	console.log("hg"+notification_window);
				    		$http({
						method : "POST",
						url : "/api/notification/",
						data:notification_window
					}).then(function(response) { 
					},function(response) {
						$scope.error = response.data
				
			})	
                

				  }
				    $scope.edit_notification = function(notification_id) {
        
   			 $http({
						method : "PUT",
						url : "/api/notification/"+notification_id+"/",
						data:{"notification_window":"ddddd"}
			}).then(function(response) { 
				$scope.notifications();
			},function(response) {		
				$scope.error = response.data
				
			});
					
              }
				   
		
//close modal
$scope.close=function(){
    $uibModalStack.dismissAll();

}

});



function adminnotificationController($scope, $http,$window,$uibModal,$controller,NgTableParams){
	angular.extend(this, $controller('notificationeModalController', {$scope: $scope}));

   console.log("notification control");
 

    $scope.notifications = function() {
   			 $http({
						method : "GET",
						url : "/api/notification/",
			}).then(function(response) { 
				$scope.notification_list = response.data
				$scope.tableParams = new NgTableParams({},{dataset: $scope.notification_list});

			},function(response) {		
				$scope.error = response.data
				
			});
					
                } 
                
        $scope.delete_notification = function(notification_id) {
   			 $http({
						method : "DELETE",
						url : "/api/notification/"+notification_id,
			}).then(function(response) { 
				$scope.notifications();
			},function(response) {		
				$scope.error = response.data
				
			});
					
                }

      

                $scope.notificationsPopup = function(){	
		        $uibModal.open({
		            templateUrl: 'notificationsModal.html',
		            size: 'md',
		            controller: 'notificationeModalController'
		           
		        });
    }
        
                


				 $scope.notifications ()


              
     }


'use strict';


function adminnotificationController($scope, $http,$window,NgTableParams){

console.log("notification");
   $scope.submitnotification = function() {
   			 $http({
						method : "POST",
						url : "/api/notification/",
						data:notification_window
			}).then(function(response) { 
				 alert("notification is sent")

			},function(response) {		
				$scope.error = response.data
				
			});
					
                } 
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
        	console.log("ags"+notification_id)
   			 $http({
						method : "DELETE",
						url : "/api/notification/"+notification_id,
			}).then(function(response) { 
				alert("DELETE")
				

			},function(response) {		
				$scope.error = response.data
				
			});
					
                } 
                $scope.notifications ()
              
     }


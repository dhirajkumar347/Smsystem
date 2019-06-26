'use strict';


function adminnotificationController($scope, $http,$window,$uibModal,NgTableParams,){

console.log("notification");
   $scope.create_notification = function() {
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
   			 $http({
						method : "DELETE",
						url : "/api/notification/"+notification_id,
			}).then(function(response) { 
				$scope.notifications();
			},function(response) {		
				$scope.error = response.data
				
			});
					
                }

        $scope.edit_notification = function(notification_id) {
        	console.log("ghjg"+notification_id);
   			 $http({
						method : "PUT",
						url : "/api/notification/"+notification_id+"/",
						data:{"notification_window":"xdvsdvsdvdvd"}
			}).then(function(response) { 
				$scope.notifications();
			},function(response) {		
				$scope.error = response.data
				
			});
					
                }
         $scope.open_notificationwindow = function() {
                	var notification_window= JSON.stringify($scope.notification);
                	console.log("hg"+notification_window);
				    		$http({
						method : "POST",
						url : "/api/notification/",
						data:notification_window
					}).then(function(response) { 
						$scope.notifications();
					},function(response) {
						$scope.error = response.data
				
			})	
                

				  }
				   
		
                


   //              app.controller('notification_modalController', function($scope, $uibModalInstance) {

			// 	  $scope.add = function(){
			// 	    $uibModalInstance.close("Ok");
			// 	    $http({
			// 			method : "POST",
			// 			url : "/api/notification/",
			// 			data:notification_window
			// 		}).then(function(response) { 
			// 			alert("notification is sent")
			// 		},function(response) {
			// 			$scope.error = response.data
				
			// })	
                

			// 	  }
				   
			// 	  $scope.cancel = function(){
			// 	    $uibModalInstance.dismiss();
			// 	  } 
				  
			// 	});
				 $scope.notifications ()


              
     }


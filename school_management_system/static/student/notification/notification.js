'use strict';

function notificationController($scope, $http,$window){

   $scope.notification = function() {
   		
   			 $http({
						method : "GET",
						url : "/api/notification/",
						
			}).then(function(response) { 
        $scope.notifications=response.data
        
               
				       
			},function(response) {		
				$scope.error = response.data
				
			});
					
                } 
                $scope.notification()
            }

        
	 // $scope.delete_notification = function(notification_id) {
  //       $http({
  //           method: "DELETE",
  //           url: "/api/notification/" + notification_id,
  //       }).then(function(response) {
  //           $scope.notifications();
  //       }, function(response) {
  //           $scope.error = response.data

  //       });

  //   }



   


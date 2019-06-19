'use strict';

function notificationController($scope, $http,$window){

   $scope.abc = function() {
   		
   			 $http({
						method : "GET",
						url : "/api/notification/",
						data:notification_window
			}).then(function(response) { 
				  console.log("agin loadnbvcgfgcgh"+JSON.strigyfy(response.data));

			},function(response) {		
				$scope.error = response.data
				
			});
					
                } 
                $scope.abc()
            }

        
	


   


from rest_framework import serializers
from school_management_system.models import notification

class notificationSerializers(serializers.ModelSerializer):
	class Meta:
		model=notification
		fields=('notification_window',)
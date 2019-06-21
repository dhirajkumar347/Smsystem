from rest_framework import serializers
from school_management_system.models import notification

class notificationSerializers(serializers.ModelSerializer):
	notification_id =serializers.IntegerField(source='id',read_only=True)
	class Meta:
		model=notification
		fields=('notification_window','notification_id')
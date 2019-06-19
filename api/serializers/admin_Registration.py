from rest_framework import serializers
from school_management_system.models import admin_Registration

class admin_RegistrationSerializers(serializers.ModelSerializer):
	class Meta:
		model=admin_Registration
		fields=('full_name', 'username', 'password','mobile_no')
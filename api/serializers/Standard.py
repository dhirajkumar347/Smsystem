from rest_framework import serializers
from school_management_system.models import Standard

class StandardSerializers(serializers.ModelSerializer):
	class Meta:
		model=Standard
		fields='__all__'
	    
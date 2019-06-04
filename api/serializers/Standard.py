from rest_framework import serializers
from school_management_system.models import standard

class standardSerializers(serializers.ModelSerializer):
	class Meta:
		model=standard
		fields=('standard_name',)
	    
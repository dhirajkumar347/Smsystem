from rest_framework import serializers
from school_management_system.models import standard

class standardSerializers(serializers.ModelSerializer):
	standard_id =serializers.IntegerField(source='id',read_only=True)
	class Meta:
		model=standard
		fields=('standard_name','standard_id')
	    
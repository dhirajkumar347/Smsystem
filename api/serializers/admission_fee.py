from rest_framework import serializers
from school_management_system.models import admission_fee

class admission_feeSerializers(serializers.ModelSerializer):
	extra_curricular_activities =serializers.CharField(source='extra_curricular_activities_types.extra_curricular_activities_types',read_only=True)
	class Meta:
		model=admission_fee
		fields=('admission_fee', 'monthly_fee', 'bus_fee','extra_curricular_activities_types','extra_curricular_activities','standard_name','extra_curricular_activities_fee','school_name') 
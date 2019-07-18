from rest_framework import serializers
from school_management_system.models import extra_curricular_activities
class extra_curricular_activitiesSerializer(serializers.ModelSerializer):
	extra_curricular_activities_id =serializers.IntegerField(source='id',read_only=True)
	class Meta:
		model = extra_curricular_activities
		fields =('extra_curricular_activities_types','extra_curricular_activities_id')


    



from rest_framework import serializers
from school_management_system.models import career



class careerSerializers(serializers.ModelSerializer):
	career_id =serializers.IntegerField(source='id',read_only=True)

	class Meta:
		model=career
		fields=('key_skill','job_description','experience','employeement_type','number_of_vacancy','career_id')

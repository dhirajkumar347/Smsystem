from rest_framework import serializers
from school_management_system.models import admissionform

class admissionformSerializers(serializers.ModelSerializer):
	class Meta:
		model=admissionform
		fields=('student_name', 'father_name', 'father_mobile_number','father_email_id','mother_name','mother_mobile_number','mother_email_id','board_name','standard_name')
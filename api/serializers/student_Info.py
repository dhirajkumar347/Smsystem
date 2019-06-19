from rest_framework.serializers import ModelSerializer
from school_management_system.models import faculty_Registration,student_Registration
from rest_framework import serializers


class student_infoSerializer(serializers.ModelSerializer):
	profile_completed=serializers.CharField(read_only=True)
	#standard_id = serializers.IntegerField()
	#standard = serializers.IntegerField(source='standard_name.standard_name',read_only=True)
	#board = serializers.IntegerField(source='board_name.board_name',read_only=True)
	#user_type =  serializers.IntegerField(source='user_type.user_type',read_only=True)



	class Meta:
		model = student_Registration
		fields =('full_name', 'username', 'password','mobile_no','age','country','state','pincode','address','school_name','board_name','user_type','student_state','standard_name','profile_completed')
        # read_only_fields = ('user_type',)
    # def create(self,validated_data):
    # 	print("new save",validated_data)
    	


    



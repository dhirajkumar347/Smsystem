from rest_framework.serializers import ModelSerializer
from school_management_system.models import faculty_Registration,student_Registration


class student_infoSerializer(ModelSerializer):
    class Meta:
        model = student_Registration
        fields =('full_name', 'username', 'password','age','country','state','pincode','address','standard_name','school_name','board_name','user_type','student_state')
        # read_only_fields = ('user_type',)
    # def create(self,validated_data):
    # 	print("new save",validated_data)
    	


    



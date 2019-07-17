from rest_framework import serializers
from school_management_system.models import applicationForm_registration


class applicationForm_registrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = applicationForm_registration
        fields =('full_name','Email_id','mobile_no','qualification','experience','current_salary','excepted_salary','resume')


    



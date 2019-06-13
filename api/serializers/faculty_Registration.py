from rest_framework import serializers
from school_management_system.models import faculty_Registration


class faculty_RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = faculty_Registration
        fields =('full_name','username','password','mobile_no','qualification','faculty_designation','experience','faculty_description','country','state','pincode','address','user_type','previous_institute','city')


    



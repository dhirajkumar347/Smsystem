from rest_framework.serializers import ModelSerializer
from school_management_system.models import faculty_Registration


class faculty_RegistrationSerializer(ModelSerializer):
    class Meta:
        model = faculty_Registration
        fields ='__all__'


    



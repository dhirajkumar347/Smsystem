from rest_framework.serializers import ModelSerializer
from school_management_system.models import faculty_Registration,student_Registration


class student_infoSerializer(ModelSerializer):
    class Meta:
        model = student_Registration
        fields ='__all__'


    



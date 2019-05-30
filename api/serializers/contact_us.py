from rest_framework import serializers
from school_management_system.models import contact_us

class contact_usSerializers(serializers.ModelSerializer):
	class Meta:
		model=contact_us
		fields=('fullname', 'mobile_number', 'Email_id','country','state','city','query')
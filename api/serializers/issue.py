from rest_framework import serializers
from school_management_system.models import issue

class issueSerializers(serializers.ModelSerializer):
	class Meta:
		model=issue
		fields=('query',)
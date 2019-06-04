from rest_framework import serializers
from school_management_system.models import board

class boardSerializers(serializers.ModelSerializer):
	class Meta:
		model=board
		fields =('board_name',)
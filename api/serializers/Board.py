from rest_framework import serializers
from school_management_system.models import board

class boardSerializers(serializers.ModelSerializer):
	board_id =serializers.IntegerField(source='id',read_only=True)
	class Meta:
		model=board
		fields =('board_name','board_id')
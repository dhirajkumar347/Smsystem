from rest_framework import serializers
from school_management_system.models import Board

class BoardSerializers(serializers.ModelSerializer):
	class Meta:
		model=Board
		fields=('boardname')
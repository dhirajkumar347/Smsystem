from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet     
from school_management_system.models import *  
from rest_framework import viewsets
from api.serializers import *


# Create your views here.
class notificationApi(viewsets.ModelViewSet): 
	serializer_class=notificationSerializers

	def get_queryset(self):
		student_obj = student_Registration.objects.all()
		student_user_type=student_obj[0].user_type
		if student_user_type == 'student' :
			return notification.objects.all()[:3]
		else:
			return notification.objects.all()

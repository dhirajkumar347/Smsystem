from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet     
from school_management_system.models import *  
from rest_framework import generics
from rest_framework import viewsets
from api.serializers import *


# Create your views here.
class admin_RegistrationApi(viewsets.ModelViewSet): 
	serializer_class=admin_RegistrationSerializers
	queryset=admin_Registration.objects.all()
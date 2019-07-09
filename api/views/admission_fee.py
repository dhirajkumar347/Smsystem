from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet     
from school_management_system.models import *  
from rest_framework import generics
from rest_framework import viewsets
from api.serializers import *

class admission_feeApi(viewsets.ModelViewSet): 
	serializer_class=admission_feeSerializers
	queryset=admission_fee.objects.all()
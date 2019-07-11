from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet     
from school_management_system.models import *  
from rest_framework import generics
from rest_framework import viewsets
from api.serializers import *


# Create your views here.
class admissionformApi(viewsets.ModelViewSet): 
	serializer_class=admissionformSerializers
	queryset=admissionform.objects.all()
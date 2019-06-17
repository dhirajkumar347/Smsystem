from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet     
from school_management_system.models import *  
from rest_framework import generics
from rest_framework import viewsets
from api.serializers import *


# Create your views here.
class issueApi(viewsets.ModelViewSet): 
	serializer_class=issueSerializers
	queryset=issue.objects.all()
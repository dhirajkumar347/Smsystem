from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
# from rest_framework.pagination import PageNumberPagination

# from .serializers import contact_usSerializers     
from school_management_system.models import *  
from rest_framework import generics
from rest_framework import viewsets
from api.serializers import *


# Create your views here.
class StandardApi(viewsets.ModelViewSet): 
	serializer_class=StandardSerializers
	queryset=Standard.objects.all()
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet     
from school_management_system.models import *  
from rest_framework import generics
from rest_framework import viewsets
from api.serializers import *


# Create your views here.
class extra_curricular_activitiesApi(viewsets.ModelViewSet): 
	serializer_class=extra_curricular_activitiesSerializer
	queryset=extra_curricular_activities.objects.all()
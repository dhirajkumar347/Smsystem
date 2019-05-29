from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination

from school_management_system.models import *
from api.serializers import *
from rest_framework import generics
from rest_framework import viewsets



class studentInfoApi(viewsets.ModelViewSet):
	serializer_class = student_infoSerializer

	def get_queryset(self):
		#hard code username
		faculty_name = self.request.query_params.get('username',None)
		queryset = student_Registration.objects.filter(username=faculty_name)
		return queryset












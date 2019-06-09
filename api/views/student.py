from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.shortcuts import get_object_or_404
from school_management_system.models import *
from api.serializers import *
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import status




class studentInfoApi(viewsets.ModelViewSet):
	serializer_class = student_infoSerializer

	def get_queryset(self):
		#hard code username
		print("get called")
		faculty_name = self.request.query_params.get('username',None)
		queryset = student_Registration.objects.filter(username=faculty_name)
		return queryset


	def create(self, request,*args,**kwargs):
		serializer = self.get_serializer(data=request.data)
		print("valid",serializer)
		if serializer.is_valid():
			print("is valid")
			serializer.save()
			return Response("success",status=status.HTTP_201_CREATED)
		else:
			print("not valid")
		return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



	


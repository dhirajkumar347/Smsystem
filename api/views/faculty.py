from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination

from school_management_system.models import *
from api.serializers import *
from rest_framework import generics
from rest_framework import viewsets



"""
This is for page numbber
"""


class SmallPagination(PageNumberPagination):
    page_size = 3
  
""""
This api give faculty list as well as faculty inforrmation.
"""
class faculty_RegistrationApi(viewsets.ModelViewSet):
    queryset = faculty_Registration.objects.all()	
    serializer_class = faculty_RegistrationSerializer
    pagination_class = SmallPagination


"""
This api give searching with faculy name

"""

class faculty_searchApi(viewsets.ModelViewSet):
	serializer_class = faculty_RegistrationSerializer

	def get_queryset(self):
		faculty_list = faculty_Registration.objects.all()
		faculty_name = self.request.query_params.get('faculty_name',None)
		if faculty_name is not None:
			queryset= faculty_list.filter(full_name__contains=faculty_name)
		return queryset












from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet     
from school_management_system.models import *  
from rest_framework import generics
from rest_framework import viewsets
from api.serializers import *

class admission_feeApi(viewsets.ModelViewSet): 
	serializer_class=admission_feeSerializers
	#queryset=admission_fee.objects.all()



	def get_queryset(self):
		admission_fees = admission_fee.objects.all()
		standard_name = self.request.query_params.get('standard_name',None)
		if standard_name is not None:
			print("no")
			if standard_name<='3':
				print("yes")
				queryset= admission_fees.filter(standard_name=standard_name)
				return queryset
			elif standard_name>='4':
				print("yesor no")
				queryset= admission_fees.filter(standard_name=standard_name)
				return queryset
		print("my exe")
		return admission_fees
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.contrib.auth import authenticate, login
from school_management_system.models import *
from django.http import JsonResponse


# Create your views here.


from django.http import HttpResponse


def home(request):
	if request.method == 'GET':
		return render(request,'home/home.html')

def faculty_List(request):
	if request.method == 'GET':
		return render(request,'faculty/faculty_list.html')

def faculty_registration(request):
	if request.method == 'GET':
		return render(request,'faculty/faculty_registration.html')

def contact_us(request):
	if request.method == 'GET':
		return render(request,'pages/contact_us.html')


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def user_login(request):
	if request.method == 'POST':
		data = JSONParser().parse(request)
		username =data.get('username')
		password = data.get('password')
		user = get_json_user_by_user_name(username)
		print("data")
		if user is not None:
			old_password = user.password
			stu_user_type = user.user_type
			if old_password == password and stu_user_type.user_type == 'student':
				return JsonResponse({'username': username})
			elif old_password == password and 'faculty' == stu_user_type:
				return render(request,'faculty/faculty_list.html')
			
	else:
		return render(request,'login/login.html')


def student_dashboard(request):
	if request.method == 'GET':
		return render(request,'student/index.html')





class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


def get_json_user_by_user_name(username):
	try:
		stude_obj = student_Registration.objects.get(username=username)
		return stude_obj
	except Exception as e:
		raise e





	




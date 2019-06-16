# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.contrib.auth import authenticate, login
from school_management_system.models import *
from django.http import JsonResponse
import traceback


# Create your views here.


from django.http import HttpResponse
def about_us(request):
	if request.method == 'GET':
		return render(request,'about_us/about_us.html')

def home(request):
	if request.method == 'GET':
		return render(request,'home/home.html')

def faculty_List(request):
	if request.method == 'GET':
		return render(request,'faculty/faculty_list.html')

def pqr(request):
	if request.method == 'GET':
		return render(request,'faculty/faculty_registration.html')

def xyz(request):
	if request.method == 'GET':
		return render(request,'student/student_Registration.html')

def terms_conditions(request):
	if request.method == 'GET' :
		return render(request,'pages/terms.html')
def introduction(request):
	if request.method == 'GET' :
		return render(request,'about_us/introduction.html')

def contact_us(request):
	if request.method == 'GET':
		return render(request,'pages/contact_us.html')


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def abc(request):
	if request.method == 'POST':
		data = JSONParser().parse(request)
		username =data.get('username')
		password = data.get('password')
		user = get_json_user_by_user_name(username,password)
		print("data",user)
		if user is not None:
			old_password = user.password
			old_username = user.username
			if old_password == password and user.user_type == 'student':
				return JsonResponse({'username': username})
			elif old_password == password and 'faculty' == stu_user_type:
				return render(request,'faculty/faculty_list.html')
		else:
			print("hjghj")
			return render(request,'login/login.html')
			
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


def get_json_user_by_user_name(username,password):
	try:
		stude_obj = student_Registration.objects.get(username=username,password=password)
		return stude_obj
	except Exception as e:
		trace_back = traceback.format_exc()
		message = str(e)+ " " + str(trace_back)
		print ("message ex________________"+message)
		





	




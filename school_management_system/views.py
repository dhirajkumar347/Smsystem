

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
#faculty registration
def fac_registration(request):
	if request.method == 'GET':
		return render(request,'faculty/faculty_registration.html')
#admin registration
def ad_Registration(request):
	if request.method=='GET':
		return render(request,'admin/admin_Registration.html')
#student registration
def stu_Registration(request):
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
        #admission
def admissions(request):
	if request.method == 'GET':
		return render(request,'admissions/admissions.html')

def admission_fee(request):
	if request.method == 'GET':
		return render(request,'admission_fee/admission_fee.html')

def howtoapply(request):
	if request.method == 'GET':
		return render(request,'admission_fee/howtoapply.html')
def admissionform(request):
	if request.method == 'GET':
		return render(request,'admission_fee/admissionform.html')

def user_login(request):
	if request.method == 'POST':
		data = JSONParser().parse(request)

		username =data.get('username')
		password = data.get('password')
		user = get_json_user_by_user_name(username,password)
		if user is not None:
			old_password = user.password
			old_username = user.username
			if old_password == password and user.user_type == 'student':
				return JsonResponse({'username': username})
			else:
				return render(request,'login/login.html')
	else:
		return render(request,'login/login.html')


def student_dashboard(request):
	if request.method == 'GET':
		return render(request,'student/index.html')

def admin_dashboard(request):
	if request.method == 'GET':
		return render(request,'admin/index1.html')

def career(request):
	if request.method == 'GET':
		return render(request,'career/career.html')

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

def admin_user_login(request):
	if request.method == 'POST':
		data = JSONParser().parse(request)
		username =data.get('username')
		password = data.get('password')
		user = get_json_user_by_admin_user_name(username,password)
		if user is not None:
			old_password = user.password
			old_username = user.username
			if old_password == password and user.user_type == 'admin':
				return JsonResponse({'username': username})
			else:
				return render(request,'admin_login/admin_login.html')
		
	else:
		return render(request,'admin_login/admin_login.html')
		



def get_json_user_by_admin_user_name(username,password):
 	try:
 		admin_obj = admin_Registration.objects.get(username=username,password=password)
 		return admin_obj
 	except Exception as e:
 		trace_back = traceback.format_exc()
 		message = str(e)+ " " + str(trace_back)
 		print ("message ex________________"+message)
		




	




    # -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.core.validators import RegexValidator
# Create your models here.
phone_regex = RegexValidator(regex=r'^\+?1?\d{5,10}$')

# Create your models here.

class Usertype(models.Model):
    user_type = models.CharField(max_length=200, unique=True)
    


    def __str__(self):
        return self.user_type

class standard(models.Model):
    standard_name = models.CharField(max_length=20,null=False)

    def __str__(self):
        return self.standard_name

class board(models.Model):
    board_name = models.CharField(max_length=20,null=False)
    


    def __str__(self):
        return self.board_name
        
class extra_curricular_activities(models.Model):
    extra_curricular_activities_types=models.CharField(max_length=40)

    def __str__(self):
        return self.extra_curricular_activities_types

# class school(models.Model):
#     school_name= models.CharField(max_length=20,null=False)
    


#     def __str__(self):
#         return self.school_name





"""
This model belong to faculty as well as faculty information 

"""


class faculty_Registration(models.Model):
    full_name = models.CharField(max_length=20)
    username = models.CharField(max_length=20,unique=True)
    password =models.CharField(max_length=20)
    mobile_no = models.IntegerField(max_length=20,unique=True)
    qualification = models.CharField(max_length=10)   
    faculty_designation = models.CharField(max_length=20)
    experience=models.IntegerField(max_length=10)
    
    faculty_description = models.TextField(max_length=600)
    country =  models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    city=models.CharField(max_length=20)
    pincode = models.IntegerField(max_length=10)
    address = models.TextField(max_length= 200)
    user_type = models.CharField(max_length=20,default="faculty")
    previous_institute=models.CharField(max_length=20,blank=True,null=True)
    def __str__(self):
        return self.full_name


class student_Registration(models.Model):
    full_name = models.CharField(max_length=20)
    username = models.CharField(max_length=20,unique=True)
    password =models.CharField(max_length=20)
    mobile_no = models.IntegerField(max_length=20,unique=True)
    age = models.CharField(max_length=20)
    country =  models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=10)
    address = models.TextField(max_length= 200)
    user_type = models.CharField(max_length=20,default="student")
    board_name=models.ForeignKey(board,null=False,on_delete=models.CASCADE)
    standard_name=models.ForeignKey(standard,null=False,on_delete=models.CASCADE)
    school_name=models.CharField(max_length=20)
    student_state = models.CharField(max_length=20,default="registered")
    def profile_completed(self):
        return "20"

    def __str__(self):
        return self.full_name 
     

    #user name  Dhiraj.kumar@asmltd.com:
    #password dhiraj@25254646


class contact_us(models.Model):

    fullname=models.CharField(max_length=30)
    mobile_number = models.CharField(validators=[phone_regex],unique=True,null=True,max_length=10)

    Email_id=models.EmailField(max_length=20,unique=True,null=False)
    country=models.CharField(max_length=15)
    state=models.CharField(max_length=15)
    city=models.CharField(max_length=20)
    query=models.TextField()

    def __str__(self):
        return self.fullname

class issue(models.Model):
    query=models.TextField(max_length=200,null=False,blank=False)
    mobile_no = models.IntegerField(max_length=20)

    def __str__(self):
        return self.query


class notification(models.Model):
    notification_window=models.TextField(max_length=1000)

    def __str__(self):
        return self.notification_window

class admin_Registration(models.Model):
    full_name=models.CharField(max_length=30)
    username = models.CharField(max_length=20,unique=True)
    password =models.CharField(max_length=20)
    mobile_no = models.IntegerField(max_length=20,unique=True)
    user_type = models.CharField(max_length=20,default="admin")

    def __str__(self):
        return self.full_name

class admission_fee(models.Model):
    admission_fee=models.IntegerField(max_length=100)
    monthly_fee=models.IntegerField(max_length=100)
    bus_fee=models.IntegerField(max_length=100)
    extra_curricular_activities_types=models.ForeignKey(extra_curricular_activities,null=True)
    standard_name=models.CharField(max_length=100,null=False)
    extra_curricular_activities_fee=models.IntegerField(max_length=200,null=True)
    school_name=models.CharField(max_length=100)

    def __str__(self):
        return self.standard_name

    
#  return 'standard_name: {} '.format(self.standard_name)
class admissionform(models.Model):
     student_name = models.CharField(max_length=20)
     father_name=models.CharField(max_length=20)
     father_mobile_number=models.CharField(max_length=10,unique=True,null=False)
     father_email_id=models.EmailField(max_length=20,unique=True,null=False)
     mother_name=models.CharField(max_length=20)
     mother_mobile_number=models.CharField(max_length=10,unique=True,null=False)
     mother_email_id=models.EmailField(max_length=20,unique=True,null=False)
     board_name=models.ForeignKey(board,null=False,on_delete=models.CASCADE)
     standard_name=models.ForeignKey(standard,null=False,on_delete=models.CASCADE)

     def __str__(self):
        return self.student_name

class career(models.Model):
    key_skill=models.CharField(max_length=100)
    job_description=models.TextField(max_length=1000)
    experience=models.IntegerField(max_length=10)
    
    employeement_type=models.CharField(max_length=20)
    number_of_vacancy=models.IntegerField(max_length=20)

    def __str__(self):
         return self.key_skill

class applicationForm_registration(models.Model):
    full_name = models.CharField(max_length=20)
    Email_id=models.EmailField(max_length=20,unique=True,null=False)
    mobile_no = models.IntegerField(max_length=20,unique=True)
    qualification = models.CharField(max_length=10)   
    experience=models.IntegerField(max_length=10)
    current_salary = models.IntegerField(max_length=10)
    excepted_salary = models.IntegerField(max_length=10)
   
    resume = models.CharField(max_length=10,null=True)
    
    def __str__(self):
        return self.full_name



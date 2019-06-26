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
    experience = models.CharField(max_length=10)
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
        return self.Email_id

class issue(models.Model):
    query=models.TextField(max_length=200,null=False,blank=False)
    mobile_no = models.IntegerField(max_length=20,unique=True)

class notification(models.Model):
    notification_window=models.TextField()

class admin_Registration(models.Model):
    full_name=models.CharField(max_length=30)
    username = models.CharField(max_length=20,unique=True)
    password =models.CharField(max_length=20)
    mobile_no = models.IntegerField(max_length=20,unique=True)
    user_type = models.CharField(max_length=20,default="admin")

    def __str__(self):
        return self.full_name


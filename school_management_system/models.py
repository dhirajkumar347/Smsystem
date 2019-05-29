# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Usertype(models.Model):
    user_type = models.CharField(max_length=200, unique=True)
    


    def __unicode__(self):
        return self.user_type


"""
This model belong to faculty as well as faculty information 

"""
class faculty_Registration(models.Model):
    full_name = models.CharField(max_length=20)
    mobile_no = models.IntegerField(max_length=20)   
    faculty_designation = models.CharField(max_length=20)
    experience = models.CharField(max_length=10)
    faculty_description = models.TextField(max_length=600)
    country =  models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.IntegerField(max_length=10)
    address = models.TextField(max_length= 200)

    def __unicode__(self):
        return self.full_name


class student_Registration(models.Model):
    full_name = models.CharField(max_length=20)
    username = models.CharField(max_length=20,unique=True)
    password =models.CharField(max_length=20)
    age = models.CharField(max_length=20)
    country =  models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.IntegerField(max_length=10)
    address = models.TextField(max_length= 200)
    user_type = models.ForeignKey(Usertype)


  
    def __unicode__(self):
        return self.password  

    #user name  Dhiraj.kumar@asmltd.com:
    #password dhiraj@25254646
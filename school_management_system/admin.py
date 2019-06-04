# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import faculty_Registration,student_Registration,Usertype,contact_us,board,standard
admin.site.register(faculty_Registration)
admin.site.register(student_Registration)
admin.site.register(Usertype)




    # Register your models here.
admin.site.register(contact_us) 

admin.site.register(board) 
admin.site.register(standard) 

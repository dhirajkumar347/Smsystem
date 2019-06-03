# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import faculty_Registration,student_Registration,Usertype,contact_us,Board,Standard
admin.site.register(faculty_Registration)
admin.site.register(student_Registration)
admin.site.register(Usertype)




    # Register your models here.
admin.site.register(contact_us) 

admin.site.register(Board) 
admin.site.register(Standard) 

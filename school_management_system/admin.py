# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import faculty_Registration,student_Registration,Usertype
admin.site.register(faculty_Registration)
admin.site.register(student_Registration)
admin.site.register(Usertype)

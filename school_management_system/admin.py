# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin


from .models import faculty_Registration,student_Registration,Usertype,contact_us,board,standard,issue,notification,extra_curricular_activities,admin_Registration,admission_fee,admissionform,career,applicationForm_registration
admin.site.register(faculty_Registration)
admin.site.register(student_Registration)
admin.site.register(Usertype)


admin.site.register(admin_Registration)

    # Register your models here.
admin.site.register(contact_us) 

admin.site.register(board) 
admin.site.register(standard) 
admin.site.register(issue)
admin.site.register(notification)
admin.site.register(admission_fee)
admin.site.register(admissionform)
admin.site.register(career)

admin.site.register(applicationForm_registration)

admin.site.register(extra_curricular_activities)
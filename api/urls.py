from django.conf.urls import url,include
from . import views
from django.contrib import admin
from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'faculty',views.faculty_RegistrationApi,base_name='faculty')
router.register(r'search',views.faculty_searchApi,base_name='search')
router.register(r'student',views.studentInfoApi,base_name='student')

router.register(r'contact_us', views.contact_usApi,base_name='contact_us')
router.register(r'standard', views.standardApi,base_name='standard')
router.register(r'board', views.boardApi,base_name='board')
router.register(r'issue', views.issueApi,base_name='issue')
router.register(r'notification', views.notificationApi,base_name='notification')
router.register(r'admin',views.admin_RegistrationApi,base_name='admin_Registration')
router.register(r'admission_fee',views.admission_feeApi,base_name='admission_fee')
router.register(r'admissionform',views.admissionformApi,base_name='admissionform')
router.register(r'career',views.careerApi,base_name='career')
router.register(r'extra_curricular_activities',views.extra_curricular_activitiesApi,base_name='extra_curricular_activities')
router.register(r'applicationForm_registration',views.applicationForm_registrationApi,base_name='applicationForm_registration')


""""
Here is we're using ViewSet classes rather than View classes, we actually don't need to design the URL configuration
so need put custome url becaese of  default  router concept
"""

urlpatterns = [
	url(r'',include(router.urls)),

]








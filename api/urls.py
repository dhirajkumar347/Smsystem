from django.conf.urls import url,include
from . import views
from django.contrib import admin
from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'facultys',views.faculty_RegistrationApi,base_name='facultys')
router.register(r'search',views.faculty_searchApi,base_name='search')
router.register(r'student',views.studentInfoApi,base_name='student')


""""
Here is we're using ViewSet classes rather than View classes, we actually don't need to design the URL configuration
so need put custome url becaese of  default  router concept
"""

urlpatterns = [
	url(r'',include(router.urls)),

]


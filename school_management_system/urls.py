from django.conf.urls import include, url
from . import views

urlpatterns = [

    url(r'^home/$', views.home, name='home'),
    url(r'^login/$', views.user_login, name='user_login'),
    url(r'^faculty_registration/$', views.user_login, name='faculty_registration'),
  
    url(r'^faculty/$', views.faculty_List, name='faculty'),
  
    url(r'^dashboard/$', views.student_dashboard, name='student_dashboard'),
    
]

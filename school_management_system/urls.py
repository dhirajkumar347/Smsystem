from django.conf.urls import include, url
from . import views

urlpatterns = [

    url(r'^home/$', views.home, name='home'),
    url(r'^login/$', views.user_login, name='user_login'),
    url(r'^faculty/$', views.faculty_List, name='faculty'),
    url(r'^faculty_registration/$', views.faculty_registration, name='faculty_registration'),
  	url(r'^faculty_registration/$', views.faculty_registration, name='faculty_registration'),
  	url(r'^student_Registration/$', views.student_Registration, name='student_Registration'),
    url(r'^dashboard/$', views.student_dashboard, name='student_dashboard'),
    #static page
    url(r'^contact_us/$', views.contact_us, name='contact_us'),
    url(r'^terms/$', views.terms_conditions, name='terms'),
    
]

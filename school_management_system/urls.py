from django.conf.urls import include, url
from . import views

urlpatterns = [

    url(r'^home/$', views.home, name='home'),
    url(r'^about_us/$',views.about_us,name='about_us'),
    url(r'^introduction/$', views.introduction, name='introduction'),
    # faculty Registration
    url(r'^faculty/$', views.faculty_List, name='faculty'),
    url(r'^faculty_registration/$', views.fac_registration, name='fac_registration'),
    # Student registration and login
  	url(r'^student_Registration/$', views.stu_Registration, name='student_Registration'),
    url(r'^dashboard/$', views.student_dashboard, name='student_dashboard'),
    url(r'^login/$', views.user_login, name='user_login'),
    
    # contact_us
    url(r'^contact_us/$', views.contact_us, name='contact_us'),
    url(r'^terms/$', views.terms_conditions, name='terms'),
    #admin re
    url(r'^admin_Registration/$',views.ad_Registration,name='admin_Registration'),
    url(r'^admin_login/$', views.admin_user_login, name='admin_user_login'),
    url(r'^admin_dashboard/$', views.admin_dashboard, name='admin_dashboard'),
    #admission fee
    url(r'^admissions/$',views.admissions,name='admissions'),
    url(r'^admission_fee/$',views.admission_fee, name='admission_fee'),
]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-07-26 12:45
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='admin_Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=30)),
                ('username', models.CharField(max_length=20, unique=True)),
                ('password', models.CharField(max_length=20)),
                ('mobile_no', models.IntegerField(max_length=20, unique=True)),
                ('user_type', models.CharField(default='admin', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='admission_fee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('admission_fee', models.IntegerField(max_length=100)),
                ('monthly_fee', models.IntegerField(max_length=100)),
                ('bus_fee', models.IntegerField(max_length=100)),
                ('standard_name', models.CharField(max_length=100)),
                ('extra_curricular_activities_fee', models.IntegerField(max_length=200, null=True)),
                ('school_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='admissionform',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_name', models.CharField(max_length=20)),
                ('father_name', models.CharField(max_length=20)),
                ('father_mobile_number', models.CharField(max_length=10, unique=True)),
                ('father_email_id', models.EmailField(max_length=20, unique=True)),
                ('mother_name', models.CharField(max_length=20)),
                ('mother_mobile_number', models.CharField(max_length=10, unique=True)),
                ('mother_email_id', models.EmailField(max_length=20, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='applicationForm_registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=20)),
                ('Email_id', models.EmailField(max_length=20, unique=True)),
                ('mobile_no', models.IntegerField(max_length=20, unique=True)),
                ('qualification', models.CharField(max_length=10)),
                ('experience', models.IntegerField(max_length=10)),
                ('current_salary', models.IntegerField(max_length=10)),
                ('excepted_salary', models.IntegerField(max_length=10)),
                ('resume', models.CharField(max_length=10, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='board',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('board_name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='career',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key_skill', models.CharField(max_length=100)),
                ('job_description', models.TextField(max_length=1000)),
                ('experience', models.IntegerField(max_length=10)),
                ('employeement_type', models.CharField(max_length=20)),
                ('number_of_vacancy', models.IntegerField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='contact_us',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=30)),
                ('mobile_number', models.CharField(max_length=10, null=True, unique=True, validators=[django.core.validators.RegexValidator(regex='^\\+?1?\\d{5,10}$')])),
                ('Email_id', models.EmailField(max_length=20, unique=True)),
                ('country', models.CharField(max_length=15)),
                ('state', models.CharField(max_length=15)),
                ('city', models.CharField(max_length=20)),
                ('query', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='extra_curricular_activities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('extra_curricular_activities_types', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='faculty_Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=20)),
                ('username', models.CharField(max_length=20, unique=True)),
                ('password', models.CharField(max_length=20)),
                ('mobile_no', models.IntegerField(max_length=20, unique=True)),
                ('qualification', models.CharField(max_length=10)),
                ('faculty_designation', models.CharField(max_length=20)),
                ('experience', models.IntegerField(max_length=10)),
                ('faculty_description', models.TextField(max_length=600)),
                ('country', models.CharField(max_length=20)),
                ('state', models.CharField(max_length=20)),
                ('city', models.CharField(max_length=20)),
                ('pincode', models.IntegerField(max_length=10)),
                ('address', models.TextField(max_length=200)),
                ('user_type', models.CharField(default='faculty', max_length=20)),
                ('previous_institute', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='issue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('query', models.TextField(max_length=200)),
                ('mobile_no', models.IntegerField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notification_window', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='standard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('standard_name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='student_Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=20)),
                ('username', models.CharField(max_length=20, unique=True)),
                ('password', models.CharField(max_length=20)),
                ('mobile_no', models.IntegerField(max_length=20, unique=True)),
                ('age', models.CharField(max_length=20)),
                ('country', models.CharField(max_length=20)),
                ('state', models.CharField(max_length=20)),
                ('pincode', models.CharField(max_length=10)),
                ('address', models.TextField(max_length=200)),
                ('user_type', models.CharField(default='student', max_length=20)),
                ('school_name', models.CharField(max_length=20)),
                ('student_state', models.CharField(default='registered', max_length=20)),
                ('board_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school_management_system.board')),
                ('standard_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school_management_system.standard')),
            ],
        ),
        migrations.CreateModel(
            name='Usertype',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_type', models.CharField(max_length=200, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='admissionform',
            name='board_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school_management_system.board'),
        ),
        migrations.AddField(
            model_name='admissionform',
            name='standard_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school_management_system.standard'),
        ),
        migrations.AddField(
            model_name='admission_fee',
            name='extra_curricular_activities_types',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='school_management_system.extra_curricular_activities'),
        ),
    ]

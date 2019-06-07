# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-06-07 11:47
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
            name='board',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('board_name', models.CharField(max_length=100)),
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
            name='faculty_Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=20)),
                ('mobile_no', models.IntegerField(max_length=20)),
                ('faculty_designation', models.CharField(max_length=20)),
                ('experience', models.CharField(max_length=10)),
                ('faculty_description', models.TextField(max_length=600)),
                ('country', models.CharField(max_length=20)),
                ('state', models.CharField(max_length=20)),
                ('pincode', models.IntegerField(max_length=10)),
                ('address', models.TextField(max_length=200)),
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
                ('age', models.CharField(max_length=20)),
                ('country', models.CharField(max_length=20)),
                ('state', models.CharField(max_length=20)),
                ('pincode', models.IntegerField(max_length=10)),
                ('address', models.TextField(max_length=200)),
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
            model_name='student_registration',
            name='user_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school_management_system.Usertype'),
        ),
    ]

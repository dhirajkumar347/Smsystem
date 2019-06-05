# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-06-05 20:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school_management_system', '0002_auto_20190606_0142'),
    ]

    operations = [
        migrations.AddField(
            model_name='student_registration',
            name='student_state',
            field=models.CharField(default='registered', max_length=20),
        ),
        migrations.AlterField(
            model_name='student_registration',
            name='state',
            field=models.CharField(max_length=20),
        ),
    ]

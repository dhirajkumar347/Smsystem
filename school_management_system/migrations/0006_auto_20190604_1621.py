# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-06-04 10:51
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('school_management_system', '0005_auto_20190604_1620'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student_registration',
            name='board_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school_management_system.board'),
        ),
        migrations.AlterField(
            model_name='student_registration',
            name='standard_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='school_management_system.standard'),
        ),
    ]

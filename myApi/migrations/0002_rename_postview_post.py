# Generated by Django 4.1.7 on 2023-03-31 04:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myApi', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PostView',
            new_name='Post',
        ),
    ]

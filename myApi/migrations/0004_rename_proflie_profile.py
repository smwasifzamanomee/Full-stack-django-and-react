# Generated by Django 4.1.7 on 2023-04-01 09:11

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myApi', '0003_alter_proflie_image'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Proflie',
            new_name='Profile',
        ),
    ]

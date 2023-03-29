from django.contrib import admin
from django.urls import path

from todolist import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('todolist/', views.index),
]

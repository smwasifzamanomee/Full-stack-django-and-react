from django.contrib import admin
from django.urls import path
from todolist1 import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('todolist1/', views.index),
    path('todolist1/delete/<int:id>/', views.delete),
    path('todolist1/update/<int:id>/', views.update),
    path('todolist1/updateData/', views.updateData)
]

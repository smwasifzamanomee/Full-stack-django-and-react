from django.contrib import admin
from django.urls import path, include
from myApi import views

# But when i get to the get, post, put and delete methods
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('todos', views.TodoView, basename='todos')


urlpatterns = [
    path('api/', include(router.urls)),
]
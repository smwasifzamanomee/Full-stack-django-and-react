from django.contrib import admin
from django.urls import path, include
from myApi import views

# But when i get to the get, post, put and delete methods
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', views.PostView, basename='posts')


urlpatterns = [
    # when i get to get and post methods
    # path('posts/', views.PostView.as_view()),
    
    # But when i get to the get, post, put and delete methods
    path('api/', include(router.urls)),
]
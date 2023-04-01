from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import PostViewSet,ProfileViewSet

router = routers.DefaultRouter()
router.register('', PostViewSet, basename='post')

urlpatterns = [
    path('post/', include(router.urls)),
    path('profile/', ProfileViewSet.as_view()),
]
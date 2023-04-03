from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import PostViewSet,ProfileViewSet, RegisterViewSet
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register('', PostViewSet, basename='post')

urlpatterns = [
    path('post/', include(router.urls)),
    path('profile/', ProfileViewSet.as_view()),
    path('login/', obtain_auth_token),
    path('register/', RegisterViewSet.as_view()),
]
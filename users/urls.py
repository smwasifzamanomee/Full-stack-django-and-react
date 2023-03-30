from django.urls import path
from .views import UserRegister
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('register/', UserRegister.as_view(), name='users'),
    path('login/', LoginView.as_view(template_name='users/login.html'), name='login'),
]
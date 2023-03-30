from django.urls import path
from . import views

urlpatterns = [
    path('', views.Homepage.as_view(), name='home'),
    path('post/<int:pk>/', views.PostDetail.as_view(), name='post-detail'),
    path('newpost/', views.PostCreate.as_view(), name='newpost'),
    path('update/<int:pk>/', views.PostUpdate.as_view(), name='post-update'),
    path('delete/<int:pk>/', views.PostDelete.as_view(), name='post-delete'),
]
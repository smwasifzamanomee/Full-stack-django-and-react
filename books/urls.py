from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('socialblogposts.urls')),
    path('users/', include('users.urls')),
]

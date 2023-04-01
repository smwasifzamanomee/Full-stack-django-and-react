from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    user =  models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='posts/' , null=True, blank=True)
    
    def __str__(self):
        return self.title

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()
    location = models.CharField(max_length=30)
    birth_date = models.DateField(null=True, blank=True)
    image = models.ImageField(upload_to='images/', default = "default.png", null=True, blank=True)
    
    def __str__(self):
        return self.user.username
    
from django.shortcuts import render
from .models import post
from django.views.generic import ListView

# Create your views here.

class Homepage(ListView):
    model = post
    template_name = 'posts/home.html'
    context_object_name = 'posts'
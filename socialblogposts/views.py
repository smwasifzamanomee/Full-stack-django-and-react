from django.shortcuts import render
from .models import post
from django.views.generic import ListView, DetailView

# Create your views here.

class Homepage(ListView):
    model = post
    template_name = 'posts/home.html'
    context_object_name = 'posts'
    ordering = ['-id']

class PostDetail(DetailView):
    model = post
    template_name = 'posts/details.html'
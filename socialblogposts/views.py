from django.shortcuts import render
from .models import post
from django.views.generic import ListView, DetailView, CreateView, DeleteView, UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin

# Create your views here.

class Homepage(ListView):
    model = post
    template_name = 'posts/home.html'
    context_object_name = 'posts'
    ordering = ['-id']

class PostDetail(DetailView):
    model = post
    template_name = 'posts/details.html'

class PostCreate(LoginRequiredMixin, CreateView):
    model = post
    template_name = 'posts/newpost.html'
    fields = ['title', 'content']
    success_url = '/'
    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)
    
class PostUpdate(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = post
    template_name = 'posts/newpost.html'
    fields = ['title', 'content']
    success_url = '/'
    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)
    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

class PostDelete(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = post
    template_name = 'posts/delete.html'
    success_url = '/'
    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False
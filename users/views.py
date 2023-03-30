from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import View
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import ProfileUpdateForm, UserUpdateForm

# Create your views here.

class UserRegister(View):
    def get(self, request):
        form = UserCreationForm()        
        return render(request, 'users/register.html', {'form': form})
    
    def post(self, request):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        return redirect('register')
    
class UserProfile(LoginRequiredMixin,View):
    def get(self, request):
        
        p_form = ProfileUpdateForm(instance=request.user.profile)
        u_form = UserUpdateForm(instance=request.user)
        
        context = {
            'p_form': p_form,
            'u_form': u_form,
        }     
           
        return render(request, 'users/profile.html', context)
    
    def post(self, request, *args, **kwargs):
        p_form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
        u_form = UserUpdateForm(request.POST, instance=request.user)
        
        if p_form.is_valid() and u_form.is_valid():
            p_form.save()
            u_form.save()
            return redirect('profile')
        
        context = {
            'p_form': p_form,
            'u_form': u_form,
        }     
           
        return render(request, 'users/profile.html', context)
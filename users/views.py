from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import View
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin

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
        return render(request, 'users/profile.html')
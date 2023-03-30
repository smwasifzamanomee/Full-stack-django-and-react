from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from django.contrib.auth.forms import UserCreationForm

# Create your views here.

class UserRegister(View):
    def get(self, request):
        form = UserCreationForm()        
        return render(request, 'users/register.html', {'form': form})
    
    def post(self, request):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'users/login.html')
        return render(request, 'users/register.html', {'form': form})
from django.http import HttpResponse
from django.shortcuts import render

todo = [
    {"todo": "Learn Python"},
    {"todo": "Learn Django"},
    {"todo": "Learn React"},
]

def index(request):
    data = "Hello, world. You're at the books index."
    return render(request, 'index.html', {'todo': todo})

def Homepage(request):
    data1 = "<h1>Homepage</h1>"
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        data = {
            "username": username,
            "password": password
        }
        return render(request, 'index.html', {'data': data})
            
    return HttpResponse(data1)



def Firstpage(request):
    user = "Wasif Zaman Omee"
    return render(request, 'index.html', {'user': user})
    

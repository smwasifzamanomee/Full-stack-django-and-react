from django.http import HttpResponse

def index(request):
    data = "Hello, world. You're at the books index."
    return HttpResponse(data)

def Homepage(request):
    data1 = "<h1>Homepage</h1>"
    return HttpResponse(data1)
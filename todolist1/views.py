from django.shortcuts import render, redirect
from .models import TodoList1, TodoForm
from django.http import HttpResponse

# Create your views here.

def index(request):
    TodolistData = TodoList1.objects.all()
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/todolist1/')
    content = {
        "TodolistData": TodolistData,
        "form": TodoForm
    }
    return render(request, "todolist1.html", {"Data": content})

def delete(request, id):
    try :
        TodoList1.objects.get(id=id).delete()
        return redirect('/todolist1/')
    except:
        return HttpResponse("Error")
    
def update(request, id):
    try :
        data = TodoList1.objects.get(id=id)
        context = {
            "Data": data
        }
        return render(request, "update-todolist.html", {"Context": context})
        return HttpResponse(f"{id}")
    except:
        return HttpResponse("Error")
    
def updateData(request):
    if request.method == "POST":
        data = request.POST
        todo = data["update"]
        id = data["id"]
        obj = TodoList1.objects.get(id=id)
        obj.text = todo
        obj.save()
        return redirect('/todolist1/')
    return HttpResponse("Error")
    
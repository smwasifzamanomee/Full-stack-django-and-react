# But when i get to the get, post, put and delete methods
from rest_framework.viewsets import ModelViewSet

from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

class TodoView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
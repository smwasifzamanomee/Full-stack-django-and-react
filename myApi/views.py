from django.shortcuts import render
from rest_framework import viewsets, views
from .models import Post, Profile
from .serializers import PostSerializer, ProfileSerializer, UserSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from rest_framework.response import Response


# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer
    
class ProfileViewSet(views.APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]
    
    def get(self, request):
        user = request.user
        # query = User.objects.get(username=user.username)
        # serializer = UserSerializer(query) 
        query = Profile.objects.get(user=user)
        serializer = ProfileSerializer(query)      
        
        return Response({"message": "response successful", "data": serializer.data})

class RegisterViewSet(views.APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "user created successfully", "data": serializer.data})
        else:
            return Response({"message": "user not created", "data": serializer.errors})
# when i get to get and post methods
from rest_framework.views import APIView

# But when i get to the get, post, put and delete methods
from rest_framework.viewsets import ModelViewSet

from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

# Create your views here.

# when i get to get and post methods
# class PostView(APIView):
#     def get(self, request):
#         posts = Post.objects.all()
#         serializer = PostSerializer(posts, many=True)
#         return Response(serializer.data)
#     def post(self, request):
#         serializer = PostSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)

# But when i get to the get, post, put and delete methods
class PostView(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
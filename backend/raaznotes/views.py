from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from .models import Post, Notes
from .serializers import PostSerializer, NotesSerializer

class PostCreateView(APIView):
    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NotesCreateView(APIView):
    def post(self, request, format=None):
        serializer = NotesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class NotesListView(ListAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer

    

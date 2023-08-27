# serializers.py

from rest_framework import serializers
from .models import Post, Notes

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        
class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = '__all__'

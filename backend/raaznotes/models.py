from django.db import models
from django.utils import timezone

class Post(models.Model):
    ideas = models.TextField()
    tags = models.CharField(max_length=100)
    created_at = models.DateTimeField(default=timezone.now)  # Use default option

class Notes(models.Model):
    title = models.CharField(max_length=100)
    cover_url = models.TextField()
    tags = models.CharField(max_length=100)
    text = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
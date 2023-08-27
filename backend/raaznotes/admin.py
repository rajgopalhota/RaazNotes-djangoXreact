from django.contrib import admin
from .models import Post, Notes  # Import the model you want to register

admin.site.register(Post)  # Register the model
admin.site.register(Notes)  # Register the model

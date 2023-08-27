from django.urls import path
from .views import PostCreateView, PostListView, NotesCreateView, NotesListView

urlpatterns = [
    path('api/posts/', PostListView.as_view(), name='post-list'),
    path('api/notes/', NotesCreateView.as_view(), name='notes-list'),
    path('api/posts/create/', PostCreateView.as_view(), name='post-create'),
    path('api/notes/create/', NotesCreateView.as_view(), name='notes-create'),
]

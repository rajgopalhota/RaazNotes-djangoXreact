from django.urls import path
from .views import PostCreateView, PostListView, NotesCreateView, NotesListView, NotesDetailView

urlpatterns = [
    path('api/posts/', PostListView.as_view(), name='post-list'),
    path('api/notes/', NotesListView.as_view(), name='notes-list'),
    path('api/posts/create/', PostCreateView.as_view(), name='post-create'),
    path('api/notes/create/', NotesCreateView.as_view(), name='notes-create'),
    path('api/notes/<int:pk>/', NotesDetailView.as_view(), name='notes-detail'),
]

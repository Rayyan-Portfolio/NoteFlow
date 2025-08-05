from django.urls import path
from .views import NoteListCreateView, NoteRetrieveUpdateDestroyView, TagListView

urlpatterns = [
    path('', NoteListCreateView.as_view(), name='note-list-create'),
    path('<int:pk>/', NoteRetrieveUpdateDestroyView.as_view(), name='note-detail'),
    path('tags/', TagListView.as_view(), name='tag-list'),
]

# from rest_framework import generics, permissions
# from .models import Note
# from .serializers import NoteSerializer

# class NoteListCreateView(generics.ListCreateAPIView):
#     serializer_class = NoteSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Note.objects.filter(user=self.request.user)

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)


# class NoteRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = NoteSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         return Note.objects.filter(user=self.request.user)




from rest_framework import generics, permissions
from .models import Note, Tag
from .serializers import NoteSerializer, TagSerializer
from django.db.models import Count, Q

class NoteListCreateView(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Note.objects.filter(user=self.request.user)
        tags_param = self.request.query_params.get('tags')
        search_param = self.request.query_params.get('search')

        if tags_param:
            tag_names = tags_param.split(',')
            queryset = queryset.annotate(
                matched_tags=Count('tags', filter=Q(tags__name__in=tag_names), distinct=True)
            ).filter(matched_tags=len(tag_names))

        if search_param:
            queryset = queryset.filter(
                Q(title__icontains=search_param) | Q(content__icontains=search_param)
            )

        return  Note.objects.filter(user=self.request.user)
    # def get_queryset(self):
    #     queryset = Note.objects.filter(user=self.request.user)
    #     tags_param = self.request.query_params.get('tags')

    #     if tags_param:
    #         tag_names = tags_param.split(',')
    #         # Filter notes that have all the specified tag names
    #         queryset = queryset.annotate(
    #             matched_tags=Count('tags', filter=Q(tags__name__in=tag_names), distinct=True)
    #         ).filter(matched_tags=len(tag_names))

    #     # if tags_param:
    #     #     tag_names = [tag.strip() for tag in tags_param.split(',')]
    #     #     for tag in tag_names:
    #     #         queryset = queryset.filter(tags__name__iexact=tag)
    #     #     queryset = queryset.annotate(tag_count=Count('tags')).filter(tag_count__gte=len(tag_names))

    #     return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class NoteRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(user=self.request.user)


# class TagListView(generics.ListAPIView):
#     queryset = Tag.objects.all()
#     serializer_class = TagSerializer
#     permission_classes = [permissions.IsAuthenticated]  # Optional
class TagListView(generics.ListAPIView):
    serializer_class = TagSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Tag.objects.filter(user=self.request.user)

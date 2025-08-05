# from rest_framework import serializers
# from .models import Note, Tag

# class TagSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tag
#         fields = ['id', 'name']
#         extra_kwargs = {
#             'name': {'validators': []}  # ⛔ Disable the default UniqueValidator
#         }

# class NoteSerializer(serializers.ModelSerializer):
#     tags = TagSerializer(many=True, required=False)

#     class Meta:
#         model = Note
#         fields = ['id', 'title', 'content', 'tags', 'created_at', 'updated_at']
#         read_only_fields = ['created_at', 'updated_at']

#     def create(self, validated_data):
#         tags_data = validated_data.pop('tags', [])
#         user = self.context['request'].user
#         note = Note.objects.create(user=user, **validated_data)

#         for tag in tags_data:
#             tag_obj, _ = Tag.objects.get_or_create(name=tag['name'], user=user)
#             note.tags.add(tag_obj)

#         return note

#     # def create(self, validated_data):
#     #     tags_data = validated_data.pop('tags', [])
#     #     note = Note.objects.create(**validated_data)

#     #     for tag in tags_data:
#     #         tag_obj, _ = Tag.objects.get_or_create(name=tag['name'])
#     #         note.tags.add(tag_obj)

#     #     return note

#     def update(self, instance, validated_data):
#         tags_data = validated_data.pop('tags', [])
#         for attr, value in validated_data.items():
#             setattr(instance, attr, value)
#         instance.save()

#         if tags_data:
#             instance.tags.clear()
#             user = self.context['request'].user
#             for tag in tags_data:
#                 tag_obj, _ = Tag.objects.get_or_create(name=tag['name'], user=user)
#                 instance.tags.add(tag_obj)

#         return instance


    # def update(self, instance, validated_data):
    #     tags_data = validated_data.pop('tags', [])
    #     for attr, value in validated_data.items():
    #         setattr(instance, attr, value)
    #     instance.save()

    #     if tags_data:
    #         instance.tags.clear()
    #         for tag in tags_data:
    #             tag_obj, _ = Tag.objects.get_or_create(name=tag['name'])
    #             instance.tags.add(tag_obj)

    #     return instance



from rest_framework import serializers
from .models import Note, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']
        extra_kwargs = {
            'name': {'validators': []}  # ⛔ Disable the default UniqueValidator
        }

class NoteSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, required=False)

    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'tags', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

    def create(self, validated_data):
        tags_data = validated_data.pop('tags', [])
        # ✅ Remove user from here
        note = Note.objects.create(**validated_data)

        # ✅ Get user from context
        user = self.context['request'].user
        for tag in tags_data:
            tag_obj, _ = Tag.objects.get_or_create(name=tag['name'], user=user)
            note.tags.add(tag_obj)

        return note

    def update(self, instance, validated_data):
        tags_data = validated_data.pop('tags', [])
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if tags_data:
            instance.tags.clear()
            user = self.context['request'].user
            for tag in tags_data:
                tag_obj, _ = Tag.objects.get_or_create(name=tag['name'], user=user)
                instance.tags.add(tag_obj)

        return instance

# from django.db.models.signals import m2m_changed, post_delete
# from django.dispatch import receiver
# from .models import Note, Tag

# @receiver(m2m_changed, sender=Note.tags.through)
# def auto_delete_unused_tags_on_m2m_change(sender, instance, action, **kwargs):
#     if action in ["post_remove", "post_clear"]:
#         for tag in instance.tags.all():
#             if tag.notes.count() == 0:
#                 tag.delete()


# @receiver(post_delete, sender=Note)
# def auto_delete_unused_tags_on_note_delete(sender, instance, **kwargs):
#     for tag in instance.tags.all():
#         if tag.notes.count() == 0:
#             tag.delete()



from django.db.models.signals import m2m_changed, pre_delete
from django.dispatch import receiver
from .models import Note, Tag

# Store tags before note is deleted
@receiver(pre_delete, sender=Note)
def auto_delete_unused_tags_on_note_delete(sender, instance, **kwargs):
    # Save tags list before it's cleared
    instance._tags_to_check = list(instance.tags.all())


# Then check those tags after deletion
@receiver(m2m_changed, sender=Note.tags.through)
def auto_delete_unused_tags_on_m2m_change(sender, instance, action, **kwargs):
    if action in ["post_remove", "post_clear"]:
        for tag in instance.tags.all():
            if tag.notes.count() == 0:
                tag.delete()


@receiver(pre_delete, sender=Note)
def delete_unused_tags_on_pre_delete(sender, instance, **kwargs):
    if hasattr(instance, "_tags_to_check"):
        for tag in instance._tags_to_check:
            if tag.notes.count() == 1:  # Only this note had it
                tag.delete()

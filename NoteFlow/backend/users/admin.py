# # # from django.contrib import admin
# # # from .models import CustomUserManager, CustomUser  # or whatever your user model is

# # # # admin.site.register(CustomUserManager)
# # # admin.site.register(CustomUser)

# # from django.contrib import admin
# # from django.contrib.auth.admin import UserAdmin
# # from .models import CustomUser

# # class CustomUserAdmin(UserAdmin):
# #     model = CustomUser
# #     list_display = ('id', 'username', 'email', 'is_staff', 'is_superuser')
# #     list_filter = ('is_staff', 'is_superuser')
# #     search_fields = ('email', 'username')
# #     ordering = ('email',)
# #     fieldsets = (
# #         (None, {'fields': ('email', 'username', 'password')}),
# #         ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
# #     )
# #     add_fieldsets = (
# #         (None, {
# #             'classes': ('wide',),
# #             'fields': ('email', 'username', 'password1', 'password2', 'is_staff', 'is_superuser')}
# #         ),
# #     )

# # admin.site.register(CustomUser, CustomUserAdmin)



# # users/admin.py

# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from django.utils.html import format_html
# from django.core.exceptions import PermissionDenied
# from .models import CustomUser

# class CustomUserAdmin(UserAdmin):
#     model = CustomUser
#     list_display = ('id', 'email', 'username', 'role', 'is_staff', 'is_superuser')
#     list_filter = ('role', 'is_staff', 'is_superuser')
#     search_fields = ('email', 'username')
#     ordering = ('email',)

#     fieldsets = (
#         (None, {'fields': ('email', 'username', 'password', 'role')}),
#         ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
#     )

#     def has_delete_permission(self, request, obj=None):
#         # ❌ No one can delete themselves
#         if obj and request.user.id == obj.id:
#             return False

#         # ✅ Superadmins can delete anyone (except themselves)
#         if request.user.role == 'superadmin':
#             return True

#         # ❌ Admins can't delete superadmins or admins
#         if obj and obj.role in ['admin', 'superadmin']:
#             return False

#         return super().has_delete_permission(request, obj)

#     def save_model(self, request, obj, form, change):
#         if request.user.role != 'superadmin' and obj.role in ['admin', 'superadmin']:
#             raise PermissionDenied("Only superadmins can assign admin or superadmin roles.")
#         super().save_model(request, obj, form, change)

# admin.site.register(CustomUser, CustomUserAdmin)



# users/admin.py

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.core.exceptions import PermissionDenied
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('id', 'email', 'username', 'role', 'is_staff', 'is_superuser')
    list_filter = ('role', 'is_staff', 'is_superuser')
    search_fields = ('email', 'username')
    ordering = ('email',)

    fieldsets = (
        (None, {'fields': ('email', 'username', 'password', 'role')}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )

    def get_readonly_fields(self, request, obj=None):
        # ❌ Non-superadmins can't edit role
        if not request.user.is_superuser or request.user.role != 'superadmin':
            return ['role']
        return []

    def has_delete_permission(self, request, obj=None):
        # ❌ No one can delete themselves
        if obj and request.user.id == obj.id:
            return False

        # ✅ Superadmins can delete anyone (except themselves)
        if request.user.role == 'superadmin':
            return True

        # ❌ Admins can't delete superadmins or other admins
        if obj and obj.role in ['admin', 'superadmin']:
            return False

        return super().has_delete_permission(request, obj)

    def save_model(self, request, obj, form, change):
        # ❌ Only superadmins can assign admin/superadmin roles
        if request.user.role != 'superadmin' and obj.role in ['admin', 'superadmin']:
            raise PermissionDenied("Only superadmins can assign admin or superadmin roles.")
        super().save_model(request, obj, form, change)

admin.site.register(CustomUser, CustomUserAdmin)

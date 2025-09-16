from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User
from .contactmodel import Contact
from .form import EmailAuthenticationForm


# Custom User Admin
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ("email", "full_name", "is_staff", "is_active", "created_at", "updated_at")
    ordering = ("email",)
    search_fields = ("email", "full_name")

    readonly_fields = ("last_login", "created_at", "updated_at")

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (_("Personal Info"), {"fields": ("full_name",)}),
        (_("Permissions"), {
            "fields": ("is_staff", "is_active", "is_superuser", "groups", "user_permissions")
        }),
        (_("Important Dates"), {"fields": ("last_login", "created_at", "updated_at")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "full_name", "password1", "password2", "is_staff", "is_active"),
        }),
    )


# Contact Admin
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email','phone', 'subject', 'created_at')
    readonly_fields = ('created_at',)
    search_fields = ('name', 'email','phone' 'subject')
    list_filter = ('created_at',)


# Register User Admin
admin.site.register(User, CustomUserAdmin)

# Override admin login form with email-based one
admin.site.login_form = EmailAuthenticationForm

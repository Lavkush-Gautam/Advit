from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.register, name="register"),
    path("me/", views.me_view, name="me"),
    path("login/", views.login_view, name="login"),
    path("refresh/", views.refresh_view, name="token_refresh"),
    path("logout/", views.logout_view, name="logout"),
    path("contact/", views.submit_contact, name="contact"),
]

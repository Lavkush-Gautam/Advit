from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model, authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.exceptions import TokenError
import json

from .contactmodel import Contact
from .serialize import ContactSerializer


User = get_user_model()


@csrf_exempt
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get("email")
        full_name = data.get("full_name")
        password = data.get("password")

        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Email already registered"}, status=400)

        user = User.objects.create_user(email=email, full_name=full_name, password=password)

        refresh = RefreshToken.for_user(user)
        access = str(refresh.access_token)

        response = JsonResponse({
            "message": "User registered successfully",
            "access": access,
            "user": {"id": user.id, "email": user.email, "full_name": user.full_name},
        })
        response.set_cookie(
            key="refresh_token",
            value=str(refresh),
            httponly=True,
            secure=False,  # Change to True in production
            samesite="Lax"
        )
        return response

    return JsonResponse({"error": "Invalid request"}, status=400)


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get("email")
        password = data.get("password")
        user = authenticate(email=email, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            access = str(refresh.access_token)

            response = JsonResponse({
                "message": "Login successful",
                "access": access,
                "user": {"id": user.id, "email": user.email, "full_name": user.full_name},
            })
            response.set_cookie(
                key="refresh_token",
                value=str(refresh),
                httponly=True,
                secure=False,
                samesite="Lax"
            )
            return response

        return JsonResponse({"error": "Invalid credentials"}, status=401)

    return JsonResponse({"error": "Invalid request"}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me_view(request):
    user = request.user
    return Response({
        "id": user.id,
        "email": user.email,
        "full_name": user.full_name,
    })


@csrf_exempt
def refresh_view(request):
    refresh_token = request.COOKIES.get("refresh_token")
    if not refresh_token:
        return JsonResponse({"error": "No refresh token"}, status=401)

    try:
        refresh = RefreshToken(refresh_token)
        new_access = str(refresh.access_token)
        return JsonResponse({"access": new_access})
    except TokenError:
        return JsonResponse({"error": "Invalid refresh token"}, status=401)


@csrf_exempt
def logout_view(request):
    response = JsonResponse({"message": "Logged out"})
    response.delete_cookie("refresh_token")
    return response


# ✅ New Contact Save View
@api_view(['POST'])
@permission_classes([AllowAny])  # Public endpoint
def submit_contact(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Contact details saved successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

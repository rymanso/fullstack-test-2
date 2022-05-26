from django.urls import include, path
from rest_framework import routers
from backend_app import views


router = routers.DefaultRouter()
router.register(r"files", views.FileViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, permissions, status
from django.contrib.auth.models import User
from django.conf import settings

from backend_app.models import File
from backend_app.serializers import FileSerializer


class FileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows files to be viewed.
    """

    queryset = File.objects.all()
    serializer_class = FileSerializer

    # def retrieve(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     if instance.static_image:
    #         six_hours = 21600  # seconds
    #         instance.static_image = create_presigned_url(
    #             instance.static_image, settings.S3_UPLOADS_BUCKET, expires_in=six_hours
    #         )
    #     serializer = self.get_serializer(instance)
    #     return Response(serializer.data)

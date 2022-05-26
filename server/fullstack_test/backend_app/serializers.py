from django.contrib.auth.models import User
from backend_app.models import File
from rest_framework import serializers


class FileSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = File
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        data_file = {
            "url": representation.pop("data_file"),
            "size": instance.data_file.size,
            "name": instance.data_file.name,
        }
        representation["data_file"] = data_file
        return representation

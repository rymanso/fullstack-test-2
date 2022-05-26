from django.db import models
from django.conf import settings
import logging


log = logging.getLogger(__name__)


class File(models.Model):
    data_file = models.FileField(upload_to="files", null=True)

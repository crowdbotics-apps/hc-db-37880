from django.conf import settings
from django.db import models
class ProviderPractices(models.Model):
    'Generated Model'
    practice = models.TextField()
    state = models.TextField()
    website = models.URLField()
    num_org_mem = models.IntegerField()

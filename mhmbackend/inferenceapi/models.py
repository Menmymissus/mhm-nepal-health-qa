from django.db import models
from user_api.models import AppUser
# Create your models here.

class GeneratedText(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE,null=True)
    input_text = models.TextField()
    generated_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
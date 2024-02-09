from django.db import models

# Create your models here.

class GeneratedText(models.Model):
    input_text = models.TextField()
    generated_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
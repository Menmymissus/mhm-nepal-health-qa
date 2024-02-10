from django.contrib import admin

# Register your models here.
from inferenceapi.models import GeneratedText

admin.site.register(GeneratedText)

from django.urls import path
from .views import generate_text

urlpatterns = [
    path('generate-text/', generate_text, name='generate_text'),
]
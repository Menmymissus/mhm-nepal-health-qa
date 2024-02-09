from django.urls import path
from .views import get_generated_texts

urlpatterns = [
    path('get-generated-texts/', get_generated_texts, name='get_generated_texts'),
]
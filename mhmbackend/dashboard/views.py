from django.shortcuts import render
from inferenceapi.models import GeneratedText
from django.http import JsonResponse
from user_api.models import AppUser

# Create your views here.

def get_generated_texts(request):
    user_email = request.GET.get('email')
    user_object = AppUser.objects.get(email=user_email)
    generated_texts = GeneratedText.objects.filter(user=user_object).order_by('-created_at').values('input_text', 'generated_text', 'created_at')
    return JsonResponse({'generated_texts': list(generated_texts)})
from django.shortcuts import render
from inferenceapi.models import GeneratedText
from django.http import JsonResponse

# Create your views here.

def get_generated_texts(request):
    generated_texts = GeneratedText.objects.all().values('input_text', 'generated_text', 'created_at')
    return JsonResponse({'generated_texts': list(generated_texts)})
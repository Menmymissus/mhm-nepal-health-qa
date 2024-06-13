from django.shortcuts import render
# Use a pipeline as a high-level helper
from transformers import pipeline
from django.http import JsonResponse
from .models import GeneratedText
from user_api.models import AppUser

# Create your views here.
def generate_text(request):
    
    user_email = request.GET.get('email')
    user = AppUser.objects.get(email=user_email)
    input_text = request.GET.get('input_text','')
    print(input_text)
    # pipe = pipeline("text2text-generation", model="Chhabi/mt5-small-finetuned-Nepali-Health-50k-2", max_new_tokens=128)
    # result = pipe(input_text)
    # generated_text = result[0]['generated_text']
    
    # # Save input text and generated text in the database
    # GeneratedText.objects.create(user=user,input_text=input_text, generated_text=generated_text)
    # # print(generated_text)
    # return JsonResponse({'generated_text': result[0]['generated_text']})

    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = MT5ForConditionalGeneration.from_pretrained("Chhabi/mt5-small-finetuned-Nepali-Health-50k-2").to(device)
    tokenizer = AutoTokenizer.from_pretrained("Chhabi/mt5-small-finetuned-Nepali-Health-50k-2")
    query = f"Answer the following questions: {input_text}"
    tokenized_query = tokenizer(query, return_tensors="pt", max_length=512, truncation=True).to(device)
    generate_text = model.generate(**tokenized_query,max_length=256,min_length=128,length_penalty=3.0,num_beams=10,top_k=100,top_p=0.95,temperature=0.7,do_sample=True,num_return_sequences=3,no_repeat_ngram_size=4)
    generated_response = tokenizer.batch_decode(generate_text, skip_special_tokens=True)[0]
    tokens = generated_response.split(" ")
    filtered_tokens = [token for token in tokens if not token.startswith("<extra_id_")]
    generated_response = " ".join(filtered_tokens)
    return JsonResponse({'generated_text': generated_response})
    print(generated_response)

import pandas as pd
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


from .models import StressLevel
from .serializers import StressLevelInputSerializer


# Import your ML model
from joblib import load
import os

# Get the path to the current directory
current_directory = os.path.dirname(os.path.realpath(__file__))

# Specify the model file name
model_file_name = 'stress_model.joblib'

# Join the current directory with the model file name
model_file_path = os.path.join(current_directory, model_file_name)

# Load the model
model = load(model_file_path)

@api_view(['GET','POST'])
def predict_stress_level(request):
    serializer = StressLevelInputSerializer(data=request.data)
    
    if serializer.is_valid():
        # Extract data from the serializer
        input_data = serializer.validated_data
    
        # Convert the input data to a DataFrame (required format for the model)
        input_df = pd.DataFrame([input_data])
        # Preprocess data and pass it to the ML model for prediction
        result = model.predict(input_df)[0]

        StressLevel.objects.create(level=result)

        return Response({"result": result}, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

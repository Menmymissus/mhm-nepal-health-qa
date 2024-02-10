from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password
from django.core.exceptions import ValidationError

class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		try:
			clean_data = custom_validation(request.data)
			serializer = UserRegisterSerializer(data=clean_data)
			print(request.data)
			if serializer.is_valid(raise_exception=True):
				# print(serializer.data)
				user = serializer.create(clean_data)
				if user:
					return Response(serializer.data, status=status.HTTP_201_CREATED)
		except ValidationError as e:
			error_messages = []
			if 'choose another email' in str(e):
				error_messages.append('The Email is already taken. Please choose another.')
			if 'choose another password' in str(e):
				error_messages.append('Password must contain minimum 8 characters')
			if 'choose another username' in str(e):
				error_messages.append('Username already taken. Choose another.')
			if 'Confirm Password do not match' in str(e):
				error_messages.append('Confirm Password do not match. ')
			if error_messages:
				return Response({'error': error_messages}, status=status.HTTP_400_BAD_REQUEST)
			else:
                # If there are other ValidationError messages not covered above
				return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

		return Response("An unknown error occured!", status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		
		data = request.data
		try:
			assert validate_email(data)
			assert validate_password(data)
			serializer = UserLoginSerializer(data=data)
			if serializer.is_valid(raise_exception=True):
				user = serializer.check_user(data)
				login(request, user)
				return Response(serializer.data, status=status.HTTP_200_OK)
		except ValidationError as e:
			error_messages = []
			if 'user not found' in str(e):
				error_messages.append('Email or Password incorrect. Please check and try again.')

			if error_messages:
				return Response({'error': error_messages}, status=status.HTTP_400_BAD_REQUEST)
			else:
                # If there are other ValidationError messages not covered above
				return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		return Response("An unknown error occured!", status=status.HTTP_400_BAD_REQUEST)
		
			

class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)
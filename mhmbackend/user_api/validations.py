from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def custom_validation(data):
    # print(data)
    email = data['email'].strip()
    username = data['username'].strip()
    password = data['password'].strip()
    password2 = data['password2'].strip()
    ##
    if not email or UserModel.objects.filter(email=email).exists():
        raise ValidationError('choose another email')
    ##
    if not password or len(password) < 8:
        raise ValidationError('choose another password, min 8 characters')
    ##
    if not username or UserModel.objects.filter(username=username).exists():
        raise ValidationError('choose another username')
    if password != password2:
        raise ValidationError('Confirm Password do not match')
    return data


def validate_email(data):
    print(data)
    email = data['email'].strip()
    if not email:
        raise ValidationError('an email is needed')
    return True

def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError('choose another username')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('a password is needed')
    return True
import jwt
from datetime import datetime

secretKey = "SECRET_KEY"

def create_token(user):
    expire = datetime.now().timestamp() + 1800
    return  jwt.encode({"user": user, "expire": expire}, secretKey, algorithm="HS256")

def verify_token(token):
    try:
        token = jwt.decode(token, secretKey, algorithms="HS256")
        if datetime.now().timestamp() > token['expire']:
            return None
        return token
    except jwt.exceptions.InvalidSignatureError:
        return None

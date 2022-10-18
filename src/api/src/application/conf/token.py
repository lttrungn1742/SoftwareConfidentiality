import logging
import jwt
from datetime import datetime

secretKey = "SECRET_KEY"

def create_token(user):
    expire = datetime.now().timestamp() + 1800
    return  jwt.encode({"user": user, "expire": expire}, secretKey, algorithm="HS256")

def verify_token(token):
    try:
        token = jwt.decode(token, secretKey, algorithms="HS256")
        logging.info(token)        
        if datetime.now().timestamp() > token['expire']:
            logging.info('the token is expired')
            return "Expired", None
        return "Pass", token
    except jwt.exceptions.InvalidSignatureError as err:
        logging.info(err)
        return "Invalid", None

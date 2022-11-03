import logging, jwt, os, random
from datetime import datetime
from application.conf import cache

secretKey = os.urandom(50).hex()


def create_token(user):
    expire = datetime.now().timestamp() + 1800
    return  jwt.encode( {"user": user, "expire": expire}, 
                        secretKey, algorithm="HS256")

def verify_token(token):
    try:  
        token = jwt.decode(token, secretKey, algorithms="HS256")       
        if datetime.now().timestamp() > token['expire']:
            logging.info('the token is expired')
            return "Expired", None
        return "Pass", token
    except jwt.exceptions.InvalidSignatureError as err:
        logging.info(err)
        return "Invalid", None

def fake_token(user):
    expire = datetime.now().timestamp() + 1800
    """
        Derailing Attacks
    """
    secretsFake = ['secrets', '1234567890', 'iloveyou','thankyou','basicauth']
    return  jwt.encode({"user": user, "expire": expire}, random.choice(secretsFake), algorithm="HS256")
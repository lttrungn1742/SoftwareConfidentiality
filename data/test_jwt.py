import  jwt, os
from datetime import datetime

secretKey = "trung"


def create_token(user):
    expire = datetime.now().timestamp() + 1800
    return  jwt.encode( {"user": user, "expire": expire}, 
                        secretKey, algorithm="None")

def verify_token(token):
 
    token = jwt.decode(token, secretKey, algorithms="none")       
    return token
    

token = create_token('trung')
print(token)


print(verify_token(token))
import logging
from flask import jsonify
from application.conf import token

def response(request):
    logging.info(request.headers)
    accessToken = request.headers['Authorization']
    logging.info(f"access-token: '{accessToken}'")
    if accessToken == None:
        res = jsonify({'error': 'Authorization: <token>'})
        status = 403
    
    msg, accessToken = token.verify_token(accessToken)
    print(msg, accessToken)
    if msg == "Invalid":
        res =  jsonify({'error': 'Invalid token'})
        status = 403

    elif msg == "Expired":
        res = jsonify({'error': 'Expired token'})
        status = 403
    
    return accessToken, res, status
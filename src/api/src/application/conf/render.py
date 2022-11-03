from ctypes import sizeof
import logging
from flask import jsonify
from application.conf import token, cache

def response(request, check_brute_force = True, check_rate_limit = True):
    accessToken = request.headers['Authorization']
    try:
        IP_ADDRESS = request.headers['X-Forwarded-For']
    except:
        IP_ADDRESS = request.remote_addr

    if check_rate_limit:
        isRateLimit = cache.detection_rate_limit(IP_ADDRESS)
        if isRateLimit:
            return None, jsonify({'error': 'Too Many Requests'}), 429

    if check_brute_force:    
        isBruteForce = cache.detection(IP_ADDRESS)
        if isBruteForce:
            logging.info(' Derailing Attacks')
            return None, jsonify({'error': 'bug'}), 500
    

    res, status = None, None
    if accessToken == None:
        res = jsonify({'error': 'Authorization: <token>'})
        status = 403
    
    msg, accessToken = token.verify_token(accessToken)
    if msg == "Invalid":
        res =  jsonify({'error': 'Invalid token'})
        status = 403
        cache.setFailedCount(IP_ADDRESS)
    elif msg == "Expired":
        res = jsonify({'error': 'Expired token'})
        status = 403

    return accessToken, res, status
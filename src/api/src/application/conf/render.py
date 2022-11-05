
import logging
from flask import jsonify
from application.conf import token, cache

def response(request, check_brute_force = True, check_rate_limit = True, check_access_control = True):
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
            return None, jsonify({'error': 'Raise exception'}), 500
    
    if check_access_control:
        accessToken = request.headers['Authorization']
        if accessToken == None:
            return None, jsonify({'error': 'Authorization: <token>'}), 403
        
        msg, accessToken = token.verify_token(accessToken)
        if msg == "Invalid":
            cache.setFailedCount(IP_ADDRESS)
            return None, jsonify({'error': 'Invalid token'}), 403
        elif msg == "Expired":
            return None, jsonify({'error': 'Expired token'}), 403
        return accessToken, None, None
from crypt import methods
from ctypes import sizeof
import json
import logging
from flask import Blueprint, request, jsonify
from application.conf import token, db, cache, render
from flask_cors import CORS, cross_origin

admin = Blueprint('admin', __name__)
CORS(admin)

@admin.route('/healthcheck')
def healthcheck():
    return 'HelloWorld'

@admin.route('/login', methods=['POST'])
@cross_origin()   
def login():
    logging.info(request.json)
    try:
        IP_ADDRESS = request.headers['X-Forwarded-For']
    except:
        IP_ADDRESS = request.remote_addr
        
    username, password = request.json['username'], request.json['password']

    isBruteForce = cache.detection(IP_ADDRESS)
    if isBruteForce:
        logging.info(' Derailing Attacks')
        return jsonify({'isSuccess': True, 'accessToken': token.fake_token(username)}), 200

    userFound = db.login_admin(username, password)
    logging.info(f'Welcome {userFound}')
    if userFound != None:
        return {'isSuccess' : True, 'username': username, 'accessToken' : token.create_token(userFound)}

    cache.setFailedCount(IP_ADDRESS)
    return {'isSuccess' : False}

# @api.route('/getSubject', methods=['GET'])
# @cross_origin()
# def getSubjects():
#     accessToken, res, status = render.response(request=request)
#     if accessToken == None:
#         return res, status
#     return db.getSubjects()


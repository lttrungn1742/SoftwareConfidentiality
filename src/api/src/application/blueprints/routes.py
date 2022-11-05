import json, sys, logging, os
from flask import Blueprint, request, jsonify, abort
from application.conf import token, db, cache, render, notification
from flask_cors import CORS, cross_origin
from functools import wraps

api = Blueprint('api', __name__)
CORS(api)

@api.route('/healthcheck')
def healthcheck():
    return 'HelloWorld'

def limit_content_length(max_length=3 * 1024 * 1024):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            if request.content_length > max_length:
                abort(413)
            return f(*args, **kwargs)
        return wrapper
    return decorator


@api.route('/login', methods=['POST'])
@limit_content_length()
@cross_origin()   
def login():
    try:
        IP_ADDRESS = request.headers['X-Forwarded-For']
    except:
        IP_ADDRESS = request.remote_addr
        
    username, password = request.json['username'], request.json['password']
    
    isBruteForce = cache.detection(IP_ADDRESS)
    if isBruteForce:
        notification.brute_force(request)
        logging.info(' Derailing Attacks')
        return jsonify({'isSuccess': True, 'accessToken': token.fake_token(username)}), 200

    userFound = db.login(username, password)
    logging.info(f'Welcome {userFound}')
    if userFound != None:
        return {'isSuccess' : True, 'username': username, 'accessToken' : token.create_token(userFound)}

    cache.setFailedCount(IP_ADDRESS)
    return {'isSuccess' : False}

@api.route('/eval', methods = ['POST'])
@limit_content_length()
@cross_origin() 
def admin():
    accessToken, res, status = render.response(request=request)
    if accessToken == None:
        return res, status
    return jsonify({'data': str(eval(request.json['cal']))}), 200


@api.route('/getSubject', methods=['GET'])
@cross_origin()
def getSubjects():
    accessToken, res, status = render.response(request=request)
    if accessToken == None:
        return res, status
    return db.getSubjects()


@api.route('/getStudents', methods=['GET'])
@cross_origin()
def getStudents():
    accessToken, res, status = render.response(request=request)
    if accessToken == None:
        return res, status
    return db.getStudents()

@api.route('/getProfile', methods=['GET'])
@cross_origin()
def getProfile():    
    accessToken, res, status = render.response(request=request)
    if accessToken == None:
        return res, status
    id = accessToken['user']
    return db.getProfile(id)

@api.route('/updateProfile', methods=['POST'])
@cross_origin()
def updateProfile():
    accessToken, res, status = render.response(request=request)
    if accessToken == None:
        return res, status
    id = accessToken['user']
    name = request.json['name']
    address = request.json['address']
    indentity = request.json['indentity']
    numberPhone = request.json['numberPhone']
    response = db.updateProfile(id, name, address, indentity, numberPhone)
    
    return json.dumps({'response' : response})

@api.route('/getAcademy', methods=['GET'])
def getAcademy():
    accessToken, res, status = render.response(request=request)
    if accessToken == None:
        return res, status
    
    id = accessToken['user']

    return db.getAcademy(id)
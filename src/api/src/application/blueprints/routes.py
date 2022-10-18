from crypt import methods
import json
import logging
from flask import Blueprint, request, jsonify
from application.conf import token, db
from flask_cors import CORS, cross_origin

api = Blueprint('api', __name__)
CORS(api)

@api.route('/healthcheck')
def healthcheck():
    return 'I am ok'

@api.route('/login', methods=['POST'])
@cross_origin()   
def login():
    username, password = request.json['username'], request.json['password']
    userFound = db.login(username, password)
    if userFound != None:
        return {'isSuccess' : True, 'username': username, 'accessToken' : token.create_token(userFound)}
    return {'isSuccess' : False}

@api.route('/getSubject', methods=['GET'])
@cross_origin()
def getSubjects():
    accessToken = request.headers['Authorization']
    
    if accessToken == None:
        return jsonify({'error': 'Authorization: <token>'}), 403
    
    msg, accessToken = token.verify_token(accessToken)

    if msg == "Invalid":
        return jsonify({'error': 'Invalid token'}), 403
    elif msg == "Expired":
        return jsonify({'error': 'Expired token'}), 403
    return db.getSubjects()

@api.route('/getStudents', methods=['GET'])
@cross_origin()
def getStudents():
    return db.getStudents()

@api.route('/getProfile', methods=['GET'])
@cross_origin()
def getProfile():
    accessToken = request.headers['Authorization']
    
    if accessToken == None:
        return jsonify({'error': 'Authorization: <token>'}), 403
    
    msg, accessToken = token.verify_token(accessToken)

    if msg == "Invalid":
        return jsonify({'error': 'Invalid token'}), 403
    elif msg == "Expired":
        return jsonify({'error': 'Expired token'}), 403
    
    id = accessToken['user']
    return db.getProfile(id)

@api.route('/updateProfile', methods=['POST'])
@cross_origin()
def updateProfile():
    accessToken = request.headers['Authorization']
    
    if accessToken == None:
        return jsonify({'error': 'Authorization: <token>'}), 403
    
    msg, accessToken = token.verify_token(accessToken)

    if msg == "Invalid":
        return jsonify({'error': 'Invalid token'}), 403
    elif msg == "Expired":
        return jsonify({'error': 'Expired token'}), 403
    
    id = accessToken['user']

    name = request.json['name']
    address = request.json['address']
    indentity = request.json['indentity']
    numberPhone = request.json['numberPhone']
    response = db.updateProfile(id, name, address, indentity, numberPhone)
    
    return json.dumps({'response' : response})

@api.route('/getAcademy', methods=['GET'])
def getAcademy():
    accessToken = request.headers['Authorization']
    
    if accessToken == None:
        return jsonify({'error': 'Authorization: <token>'}), 403
    
    msg, accessToken = token.verify_token(accessToken)

    if msg == "Invalid":
        return jsonify({'error': 'Invalid token'}), 403
    elif msg == "Expired":
        return jsonify({'error': 'Expired token'}), 403
    
    id = accessToken['user']

    return db.getAcademy(id)
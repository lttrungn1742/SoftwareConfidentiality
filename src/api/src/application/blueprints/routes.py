import json, re, logging 
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
        return jsonify({'error': 'Authorization: <token>'}), 404
    
    accessToken = token.verify_token(accessToken)
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
        return jsonify({'error': 'Authorization: <token>'}), 404
    
    accessToken = token.verify_token(accessToken)

    if accessToken == None:
        return jsonify({'error': 'Bad Request'}), 404
    
    id = accessToken['user']
    return db.getProfile(id)

@api.route('/updateProfile', methods=['POST'])
@cross_origin()
def updateProfile():
    accessToken = request.headers['Authorization']
    
    if accessToken == None:
        return jsonify({'error': 'Authorization: <token>'}), 404
    
    accessToken = token.verify_token(accessToken)
    
    id = accessToken['user']

    name = request.json['name']
    address = request.json['address']
    indentity = request.json['indentity']
    numberPhone = request.json['numberPhone']
    response = db.updateProfile(id, name, address, indentity, numberPhone)
    
    return json.dumps({'response' : response})
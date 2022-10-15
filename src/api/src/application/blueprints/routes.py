from flask import Blueprint, request
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
        return {'isSuccess' : True, 'username': username, 'accessToken' : token.create_cookie(userFound)}
    return {'isSuccess' : False}


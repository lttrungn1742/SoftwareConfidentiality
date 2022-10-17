import logging
from flask import Flask, jsonify, request
from application.blueprints.routes import api
from application.conf import token
import re

app = Flask(__name__)
app.config.from_object('application.conf.config.Config')

app.register_blueprint(api, url_prefix='/api')

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not Found'}), 404

@app.errorhandler(403)
def forbidden(error):
    return jsonify({'error': 'Not Allowed'}), 403

@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': 'Bad Request'}), 400

@app.errorhandler(Exception)
def bad_request(error):
    logging.info(error)
    return jsonify({'error': 'Bad Request'}), 404

# @app.before_request
# def intercept():
#     if re.match('^(%s)'%'|'.join(['/api/login', '/api/healthcheck'] ),request.path):
#         pass
#     elif '/api/' in request.path:
#         try:
#             accessToken = request.headers.get('Authorization')
#             logging.info(accessToken)
#             logging.info(type(accessToken))
#             accessToken = token.verify_token(accessToken)
#             if accessToken == None:
#                 return jsonify({'error': 'Bad Request'}), 404
#         except KeyError as err:
#             logging.info(f"Interception: {err}" )
#             return jsonify({'error': 'Authorization: <token>'}), 404
        
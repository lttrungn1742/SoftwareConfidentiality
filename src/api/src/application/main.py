import logging
from flask import Flask, jsonify, request
from application.blueprints.routes import api

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

@app.errorhandler(405)
def now_allowed(error):
    return jsonify({'error': 'Method not allowed'}), 405

@app.errorhandler(405)
def now_allowed(error):
    return jsonify({'error': 'Request Entity Too Large'}), 413

@app.errorhandler(Exception)
def bad_request(error):
    if 'HTTP_AUTHORIZATION' in str(error):
        return jsonify({'error': 'Authorization: <token>'}), 403
    logging.info(error)
    return jsonify({'error': 'Bad Request'}), 404


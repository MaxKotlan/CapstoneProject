from flask import Flask, jsonify, send_from_directory, request, abort
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from flask_cors import CORS
from werkzeug.routing import BaseConverter
import json
import datetime
from database import *

import mimetypes
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('text/javascript', '.js')


app = Flask(__name__, static_url_path='', static_folder="angular/dist/CapstoneProject")

CORS(app, support_credentials=True)

app.config['SECRET_KEY'] = 'yeet'

login_manager = LoginManager()
login_manager.init_app(app)

@app.route("/login", methods=["POST"])
def Login():
    if not request.json or not 'username' in request.json or not 'password' in request.json:
        abort(400)
    
    with db_session:
        user = get(u for u in User if u.username==request.json['username'] and u.password==request.json['password'])

    if user:
        login_user(user, remember=True)
        return "success"
    else:
        abort(403)

@app.route('/isLoggedIn', methods=["GET"])
def isLoggedIn():
    if current_user.is_authenticated:
        return "true"
    else:
        return "false"

@app.route("/logout", methods=["GET"])
def Logout():
    logout_user()
    return "success"

@login_manager.user_loader
@db_session
def loadUser(userid):
    return User[userid]

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def angular(path):
    return send_from_directory("angular/dist/CapstoneProject", "index.html") 

@app.route("/text", methods=['GET'])
def getText():
    with db_session:
        all_text_result = select(t for t in Text)[:]
        all_text_list = list(t.to_dict() for t in all_text_result)
    
    return jsonify(all_text_list)

@app.route("/text", methods=['POST'])
@login_required
def saveText():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      to_update = Text.get(id=json['id'])
      to_update.text = json['title']
      to_update.text = json['text']
      to_update.lastUpdated = datetime.datetime.now()
      to_update.lastUpdatedBy = current_user.username
      commit()

    return "success"

if __name__ == "__main__":
    with db_session:
        if Text.select().first() is None:
            populate_database()
    app.run()

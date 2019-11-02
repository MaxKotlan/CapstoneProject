from flask import Flask, jsonify, send_from_directory, request, abort
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from werkzeug.routing import BaseConverter
import json
import datetime
from database import *

app = Flask(__name__, static_url_path="", static_folder="angular/dist/CapstoneProject")

app.config['SECRET_KEY'] = 'yeet'

login_manager = LoginManager()
login_manager.init_app(app)

class RegexConverter(BaseConverter):
    def __init__(self, url_map, *items):
        super(RegexConverter, self).__init__(url_map)
        self.regex = items[0]


app.url_map.converters['regex'] = RegexConverter

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

@app.route("/logout", methods=["GET"])
def Logout():
    logout_user()
    return "success"

@login_manager.user_loader
@db_session
def loadUser(userid):
    return User[userid]

@app.route("/")
def angular():
    return send_from_directory("angular/dist/CapstoneProject", "index.html") 

@app.route("/<regex('\w\.(js|css)'):path>")
def angular_src(path):
    return send_from_directory("angular/dist/CapstoneProject", path)

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

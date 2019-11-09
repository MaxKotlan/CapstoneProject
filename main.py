from flask import Flask, jsonify, send_from_directory, request, abort
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from flask_cors import CORS
from werkzeug.routing import BaseConverter
import json
import datetime
from database import *

from api.text  import text
from api.login import login
from api.work  import work

import mimetypes
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('text/javascript', '.js')


app = Flask(__name__, static_url_path='', static_folder="angular/dist/CapstoneProject")
app.register_blueprint(text,  url_prefix='/api')
app.register_blueprint(login, url_prefix='/api')
app.register_blueprint(work,  url_prefix='/api')



CORS(app, support_credentials=True)

app.config['SECRET_KEY'] = 'yeet'

login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
@db_session
def loadUser(userid):
    return User[userid]

@app.route('/', defaults={'path': ''})
@app.route('/works', defaults={'path': '/works'})
@app.route('/admin', defaults={'path': '/admin'})
@app.route('/<path:path>')
def angular(path):
    return send_from_directory("angular/dist/CapstoneProject", "index.html") 

if __name__ == "__main__":
    with db_session:
        if Text.select().first() is None:
            populate_database()
    app.run()

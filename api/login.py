from flask import Blueprint, request, abort
from flask_login import login_required, current_user, login_user, logout_user
from database import *

login = Blueprint('login', __name__)

@login.route("/login", methods=["POST"])
def Login():
    if not request.json or not 'username' in request.json or not 'password' in request.json:
        abort(400)

    with db_session:
        user = get(u for u in User if u.username==request.json['username'])

    if user is None or not user.check_password(request.json['password']):
        abort(403)
    login_user(user, remember=True)
    return "success"

@login.route('/isLoggedIn', methods=["GET"])
def isLoggedIn():
    if current_user.is_authenticated:
        return "true"
    else:
         return "false"

@login.route("/logout", methods=["GET"])
def Logout():
    logout_user()
    return "success"

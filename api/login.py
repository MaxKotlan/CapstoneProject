from flask import Blueprint, request, abort, url_for, redirect
from flask_login import login_required, current_user, login_user, logout_user
from database import *
import uuid
from email_helper import EmailHelper

login = Blueprint('login', __name__)

@login.route("/login", methods=["POST"])
def Login():
    if not request.json or not 'email' in request.json or not 'password' in request.json:
        abort(400)

    with db_session:
        user = get(u for u in User if u.email==request.json['email'])

    if user is None or not user.check_password(request.json['password']) or not user.email_verified:
        abort(403)
    login_user(user, remember=True)
    return "success"

@login.route('/newAdmin', methods=["POST"])
@login_required
def newAdmin():
    if not request.json or not 'email' in request.json:
        abort(400)

    email = request.json['email']
    validation_key = uuid.uuid4().hex

    with db_session:
        pendingUser = get(u for u in PendingUser if u.email==email)
        if pendingUser is None:
            pendingUser = PendingUser(email=email, validation_key=validation_key)
            commit()

    EmailHelper.send_invite(email)
    return "success"

@login.route('/register', methods=["POST"])
def register():
    if not request.json or not 'email' in request.json or not 'password' in request.json:
        abort(400)

    email = request.json['email']
    password = request.json['password']
    with db_session:
        pendingUser = get(u for u in PendingUser if u.email==email)
        if pendingUser is None:
            abort(400)
        newUser = User(email=email, password="not_set", email_verified=False)
        newUser.set_password(password)
        commit()

    EmailHelper.send_verification(email, pendingUser.validation_key)
    return "success"

@login.route('/verify', methods=["GET"])
def verify():
    verification_key = request.args.get('key')

    with db_session:
        pendingUser = get(u for u in PendingUser if u.validation_key==verification_key)
        user = get(u for u in User if u.email==pendingUser.email)
        user.email_verified = True
        commit()

    login_user(user, remember=True)
    return redirect('/')

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

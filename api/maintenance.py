from flask import Blueprint, request, abort, url_for, redirect, current_app
from flask_login import login_required, current_user, login_user, logout_user


maintenance = Blueprint('maintenance', __name__)

maintenanceStatus = False

@maintenance.route("/maintenance", methods=["GET"])
def getStatus():
    if maintenanceStatus:
        return "true"
    else:
        return "false"

@maintenance.route("/maintenance", methods=["POST"])
def toggleMaintenance():
    global maintenanceStatus
    maintenanceStatus = not maintenanceStatus
    if maintenanceStatus:
        return "true"
    else:
        return "false"

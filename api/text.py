from flask import Blueprint, jsonify, request, abort
from flask_login import login_required, current_user
from database import *
import json

text = Blueprint('text', __name__)

@text.route("/text", methods=['GET'])
def getText():
    with db_session:
        all_text_result = select(t for t in Text)[:]
        all_text_list = list(t.to_dict() for t in all_text_result)
    
    return jsonify(all_text_list)

@text.route("/text", methods=['POST'])
@login_required
def addText():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      new_text = Text(title=json['title'], text=json['text'], lastUpdated=datetime.datetime.now(), lastUpdatedBy=current_user.username)
      commit()

    return jsonify(new_text.to_dict())


@text.route("/text", methods=['PUT'])
@login_required
def updateText():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      to_update = Text.get(id=json['id'])
    to_update.title = json['title']
      to_update.text = json['text']
      to_update.lastUpdated = datetime.datetime.now()
      to_update.lastUpdatedBy = current_user.username
      commit()

    return jsonify(to_update.to_dict())


@text.route("/text", methods=['DELETE'])
@login_required
def deleteText():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      to_delete = Text.get(id=json['id'])
      to_delete.delete()
      commit()

    return jsonify(to_delete.to_dict())

from flask import Blueprint, jsonify, request, abort
from flask_login import login_required, current_user
from database import *
import json

work = Blueprint('work', __name__)

@work.route("/work", methods=['GET'])
def getWork():
    with db_session:
      all_work_result = select(w for w in Work)[:]
      all_work_list = list(w.to_dict() for w in all_work_result)
    
    return jsonify(all_work_list)

@work.route("/work", methods=['POST'])
@login_required
def addWork():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      new_work = Work(title=json['title'], path=json['path'], description=json['description'], dateAdded=datetime.datetime.now())
      commit()

    return jsonify(new_work.to_dict())

@work.route("/work", methods=['PUT'])
@login_required
def updateWork():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      to_update = Work.get(id=json['id'])
      to_update.title = json['title']
      to_update.path = json['path']
      to_update.description = json['description']

      commit()

    return jsonify(to_update.to_dict())


@work.route("/work", methods=['DELETE'])
@login_required
def deleteWork():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      to_delete = Work.get(id=json['id'])
      to_delete.delete()
      commit()

    return jsonify(to_delete.to_dict())

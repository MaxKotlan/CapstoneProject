from flask import Blueprint, jsonify, request, abort
from flask_login import login_required, current_user
from database import *
import json
import copy

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
      cat = Category.get(id=json['category'])
      new_work = Work(
        title=json['title'], 
        path=json['path'], 
        description=json['description'], 
        category=Category(title="asdkljsad", description="asdkljjdsakljahsdk"),
        dateAdded=datetime.datetime.now()
      )
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


@work.route("/work/<int:workid>", methods=['DELETE'])
@login_required
def deleteWork(workid):
    if not workid: abort(400)

    with db_session:
      to_delete = Work.get(id=workid)
      return_value = jsonify(to_delete.to_dict())
      to_delete.delete()
      commit()
      return return_value


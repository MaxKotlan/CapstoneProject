from flask import Blueprint, jsonify, request, abort
from flask_login import login_required, current_user
from database import *
import json
import copy

category = Blueprint('category', __name__)

@category.route("/category", methods=['GET'])
def getCat():
    with db_session:
      all_category_result = select(c for c in Category)[:]
      all_category_list = list(c.to_dict() for c in all_category_result)
    
    return jsonify(all_category_list)

@category.route("/category", methods=['POST'])
@login_required
def addCat():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      new_cat = Category(title=json['title'], description=json['description'])
      commit()

    return jsonify(new_cat.to_dict())

@category.route("/category", methods=['PUT'])
@login_required
def updateCat():
    if not request.json:
        abort(400)

    json = request.get_json()

    with db_session:
      to_update = Category.get(id=json['id'])
      to_update.title = json['title']
      to_update.description = json['description']

      commit()

    return jsonify(to_update.to_dict())


@category.route("/category/<int:catid>", methods=['DELETE'])
@login_required
def deleteCat(catid):
    if not catid: abort(400)

    with db_session:
      to_delete = Category.get(id=catid)
      return_value = jsonify(to_delete.to_dict())
      to_delete.delete()
      commit()
      return return_value


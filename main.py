from flask import Flask, jsonify, send_from_directory, request
from werkzeug.routing import BaseConverter
import json
import datetime
from database import *

app = Flask(__name__, static_url_path="", static_folder="angular/dist/CapstoneProject")

class RegexConverter(BaseConverter):
    def __init__(self, url_map, *items):
        super(RegexConverter, self).__init__(url_map)
        self.regex = items[0]


app.url_map.converters['regex'] = RegexConverter

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
def saveText():
    if not request.json:
        abort(400)

    json = request.get_json()
    user = "Clay James"

    with db_session:
      to_update = Text.get(id=json['id'])
      to_update.text = json['text']
      to_update.lastUpdated = datetime.datetime.now()
      to_update.lastUpdatedBy = user
      commit()

    return "success"

if __name__ == "__main__":
    with db_session:
        if Text.select().first() is None:
            populate_database()
    app.run()

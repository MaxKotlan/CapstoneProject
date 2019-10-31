from flask import Flask, jsonify, send_from_directory, request
from werkzeug.routing import BaseConverter
import sqlite3
from models.text import Text
import json
import datetime

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
    with sqlite3.connect("capstone-project.db") as conn:
        c = conn.cursor()
        c.execute('SELECT * FROM text')
        text = list((Text(*x).__dict__ for x in c.fetchall()))
        return jsonify(text)

@app.route("/text", methods=['POST'])
def saveText():
    if not request.json:
        abort(400)

    json = request.get_json()
    currentTime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    user = "Clay James"

    updatedText = {
        "newText": json["text"],
        "lastUpdated": currentTime,
        "lastUpdatedBy": user,
        "id": json["id"]
    }

    with sqlite3.connect("capstone-project.db") as conn:
        c = conn.cursor()
        c.execute('''
                    UPDATE text 
                    set text = :newText,
                        lastChanged = :lastUpdated,
                        lastChangedBy = :lastUpdatedBy
                    where id = :id
                    ''', updatedText)
        conn.commit()
    
    return "success"


if __name__ == "__main__":
    app.run()

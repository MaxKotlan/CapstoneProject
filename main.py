from flask import Flask, jsonify, send_from_directory, request
from werkzeug.routing import BaseConverter
import sqlite3
from models.text import Text
import json

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
        textId = request.args.get('id')
        c = conn.cursor()
        c.execute('SELECT * FROM text WHERE id=?', textId)
        text = Text(*c.fetchone())
        return jsonify(text.__dict__)

# @app.route("/text", methods=['POST'])
# def saveText():

if __name__ == "__main__":
    app.run()

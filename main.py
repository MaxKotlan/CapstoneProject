from flask import Flask
from flask import send_from_directory
from flask import request
from werkzeug.routing import BaseConverter


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
    textId = request.args.get('id')
    return "lorum ipsum test test twestalknoawelkf. Requested text: {}".format(textId)

if __name__ == "__main__":
    app.run()

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/time')
def index():
    return {
        'name': ['orange, app']
    }

@app.route('/')
def rating():
    return {
        'x': 2
    }


if __name__ == '__main__':
    app.run(debug=True)

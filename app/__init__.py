from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.mail import Mail 


app = Flask(__name__)

db = SQLAlchemy(app) 
app.config.from_object('config')
mail = Mail(app)

from app import views



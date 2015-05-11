import os
from keys import secret,  pw 


SECRET_KEY = secret

CSRF_ENABLED = True 

basedir = os.path.abspath(os.path.dirname(__file__))


if os.environ.get('DATABASE_URL') is None:
	SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db') + '?check_same_thread=False'
else:
	SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']

SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')

ADMINS = [
	'j.rodriguez@theknowledgehouse.org',
	'joebxincubator@gmail.com',
	'joeknows718@gmail.com']

#mail server settings
MAIL_SERVER = 'smtp.googlemail.com'
MAIL_PORT = 465
MAIL_USE_TSL = False 
MAIL_USE_SSL = True 
MAIL_USERNAME = 'joeknows718@gmail.com'
MAIL_PASSWORD = pw
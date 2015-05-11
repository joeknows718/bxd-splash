from flask.ext.mail import Message 
from app import app, mail
from flask import render_template
from config import ADMINS
from decorators import async 


@async
def send_async_email(app, msg):
	with app.app_context():
		mail.send(msg)

def send_mail(subject, sender, recipients, text_body, html_body):
	msg = Message(subject, sender=sender, recipients=recipients)
	msg.body = text_body
	msg.html = html_body
	send_async_email(app, msg)


def contact_thanks(email, firstname):
	send_mail('Thanks for contacting BXD',
		ADMINS[0],
		[email],
		render_template('thanks_email.txt', firstname=firstname),
		render_template('thanks_email.html', firstname=firstname))

def contact_email(email, firstname, lastname, org, msg):
	send_mail('New Contact from BXD',
		ADMINS[0],
		[ADMINS[0], ADMINS[1], ADMINS[2]],
		render_template('contact_email.txt', firstname=firstname, lastname=lastname, org=org, msg=msg, email=email),
		render_template('contact_email.html', firstname=firstname, lastname=lastname, org=org, msg=msg, email=email))
		
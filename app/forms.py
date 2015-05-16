from flask.ext.wtf import Form
from wtforms import StringField, TextAreaField
from wtforms.validators import Required, Email, Length 


class ContactForm(Form):
	first_name = StringField('First Name:', validators=[Required()])
	last_name = StringField('Last Name:', validators=[Required()])
	organization = StringField('Your Organization')
	email = StringField('Your Email', validators=[Required(), 
												Length(1, 64), 
												Email()])
	message = TextAreaField('Your Messeage:')

	
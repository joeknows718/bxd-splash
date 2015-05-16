from flask import render_template, redirect, flash, url_for, request
from forms import ContactForm
from emails import contact_thanks, contact_email 
from app import app

@app.route('/')
def index():
	return render_template('index.html')



#@app.route('/partners')
#def partners():
#	title = 'Our Partners'
#	return render_template('partners.html' title=title)

#@app.route('/recent-news/<int:page>')
#@app.route('/news')
#def recent_news(page=1):
#	title = 'Recent News'
#	return render_template('news.html' title=title)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
	title = 'Contact Us'
	form = ContactForm()
	if request.method == 'POST' and form.validate():
		firstname = form.first_name.data
		lastname = form.last_name.data
		email = form.email.data
		org = form.organization.data
		if not org:
			org = 'NONE'
		msg = form.message.data
		contact_thanks(email, firstname)
		contact_email(email, firstname, lastname, org, msg)
		flash('Thanks for reaching out!')
		return redirect(url_for('index'))
	return render_template('contact.html', form=form, title=title)

#@app.route('/donate')
#def donate():
#	title = 'Support Us'


#errors
@app.errorhandler(404)
def not_found_error(error):
	return render_template('404.html'), 404


@app.errorhandler(500)
def internal_error(error):
	db.session.rollback()
	return render_template('500.html'), 500  


from flask import Blueprint, render_template
from flask_login import login_required, current_user

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template('index.html', user=current_user)

@views.route('/about-us')
def about_us():
    return render_template('about_us.html', user=current_user)

@views.route('/shop')
@login_required
def shop():
    return render_template('shop.html', user=current_user)

@views.route('/contact-us')
def contact_us():
    return render_template('contact_us.html', user=current_user)
from flask import Blueprint, render_template, request, flash, redirect, url_for
from . import db #means from __init__.py import db
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash #provide one-way password conversion to prevent others reading
from flask_login import login_user, login_required, logout_user, current_user


auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        
        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in successfully!', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('Incorrect password, try again.', category='error')
        else:
            flash('Email does not exist.', category='error')
            
    return render_template('login.html', user=current_user)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        your_name = request.form.get('yourName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        
        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists.', category='error')
        #simple validation
        elif password1 != password2:
            flash('Passwords don\'t match.', category='error')
        elif len(email) < 4:
            flash('Email must be greater than 4 characters.', category='error')
        elif len(your_name) < 3:
            flash('Name must be greater than 3 characters', category='error')
        else:
            new_user = User(email=email, your_name=your_name, password=generate_password_hash(password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            flash('Account successfully created!', category='success')
            login_user(user, remember=True)
            return redirect(url_for('views.home'))
            
    return render_template('sign_up.html', user=current_user)
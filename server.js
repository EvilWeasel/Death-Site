const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// ENVIRONMENT VARIABLES
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo/death-site';


// set urlencoded
app.use(express.urlencoded({ extended: true }));

// setup method override to allow PUT and DELETE requests in forms
app.use(methodOverride('_method'));


// import routers
const indexRouter = require('./routes/r_index');

// setup routes
app.use('/', indexRouter);

// setup pug for views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// don't forget mongoose

// add route for static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT)
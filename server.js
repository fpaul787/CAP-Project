const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const courses = require('./routes/api/Course');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// Routes
app.use('/api/courses', courses);

// Open on port process.env.PORT or 5000
const port = process.env.PORT || 5000;

// App use the port specified above, log what port we're on.
app.listen(port, () => console.log(`Server started on port ${port}`));
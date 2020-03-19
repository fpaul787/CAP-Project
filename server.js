const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

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
app.use('/api/items', items);

// Open on port process.env.PORT or 5000
const port = process.env.PORT || 5000;

// App use the port specified above, log what port we're on.
app.listen(port, () => console.log(`Server started on port ${port}`));
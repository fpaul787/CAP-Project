const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const courses = require('./routes/api/Course')
const cartRoute = require('./routes/api/CartItem')
const enrollRoute = require('./routes/api/EnrollItem')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())
app.use(cors())

//DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err)

    )

// Routes
app.use('/api/courses', courses)
app.use('/api/cart', cartRoute)
app.use('/api/enrolled', enrollRoute)

// Open on port process.env.PORT or 5000
const port = process.env.PORT || 5000

// App use the port specified above, log what port we're on.
app.listen(port, () => console.log(`Server started on port ${port}`))
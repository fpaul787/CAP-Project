const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')


const courses = require('./routes/api/Course')
const cartRoute = require('./routes/api/CartItem')
const enrollRoute = require('./routes/api/EnrollItem')
const completedRoute = require('./routes/api/Completed')
const usersRoute = require('./routes/api/users')
const profileRoute = require('./routes/api/profile')
const authRoute = require('./routes/api/auth')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json())
app.use(cors())

// DB Config
const connectDB = require('./config/db')


// Connect Database
connectDB();



// Routes
app.use('/api/courses', courses)
app.use('/api/cart', cartRoute)
app.use('/api/enrolled', enrollRoute)
app.use('/api/completed', completedRoute)
app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)
app.use('/api/profile', profileRoute)

// Open on port process.env.PORT or 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
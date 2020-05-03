const mongoose = require('mongoose')
const config = require('config')

// fron keys.json
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })

        console.log('MongoDB Connected...')
    } catch (error) {
        console.log("There was an error connecting with mongoose", error.message)     
        
        // Exit process with failter
        console.log('Exiting...')
        process.exit(1);
    }
}

module.exports = connectDB;
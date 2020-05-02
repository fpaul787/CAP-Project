const mongoose = require('mongoose')
const config = require('config')

// fron keys.json
const db = config.get('mongoURI')
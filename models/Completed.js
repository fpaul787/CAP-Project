const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const CompletedSchema = new Schema({
    completed: {
        type: Object,
        required: true
    }
    
});

module.exports = Completed = mongoose.model('complete', CompletedSchema);
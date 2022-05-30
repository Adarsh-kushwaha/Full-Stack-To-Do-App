const mongoose = require('mongoose');

//schema for for database
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide the name"],
        trim: true,
        maxlength: [20, "name must be less than 20 character"],
    },

    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model("Task", TaskSchema);
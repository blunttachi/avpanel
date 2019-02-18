const mongoose = require('mongoose');

var reminderSchema = new mongoose.Schema({
    task: String,
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Reminder', reminderSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
});

const userModel = mongoose.model('userProfile', userSchema);

module.exports = userModel;

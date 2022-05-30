const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
    mail: String,
    password: String,
    isAdmin: Boolean,
    wallet: Number
})

const User = mongoose.model('User', userSchema);

module.exports = User
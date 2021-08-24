const Joi = require('joi');
const mongoose = require('mongoose');
const Login = mongoose.model('Login', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        //unique: true
    },

    password: {
        type: String,
        required: true,
        //unique: true
    }
}));
exports.Login = Login;

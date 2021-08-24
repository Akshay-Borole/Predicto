
const Joi = require('joi');
const mongoose = require('mongoose');

const Register = mongoose.model('Register', new mongoose.Schema({

    username: {
        type: String,
        required: true,
        maxlength: 100
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // trim:true
    },

    mobileno: {
        type: Number,
        required: true,
        //unique:true,
        minlength: 10,
        maxlength: 10
    },

    altmobileno: {
        type: Number,
        required: false,
        //unique:true,
        minlength: 10,
        maxlength: 10
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    confirmpassword: {
        type: String,
        required: true,
        minlength: 8
    }

}));

function validateRegister(register) {
    const schema = {
        username: Joi.string().max(100).required(),
        email: Joi.string().required().email(),
        mobileno: Joi.string().min(10).max(10).required(),
        altmobileno: Joi.string().min(10).max(10).required(),
        password: Joi.string().min(8).required(),
        confirmpassword: Joi.string().min(8).required()
    };

    return Joi.validate(register, schema);
}



exports.Register = Register;
exports.validate = validateRegister;

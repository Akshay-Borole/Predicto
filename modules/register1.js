const { string } = require('joi');
const Joi = require('joi');
const mongoose = require('mongoose');
const { buyStrategy } = require('./strategy');

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
    },
    bankDetails: [{
        account_no: {
            type: Number,
            required: true,
            //unique:true,
            maxlength: 11
        },

        bank_name: {
            type: String,
            required: true
            //unique:true,
        },

        branch_add: {
            type: String,
            required: true
            //unique:true,
        },

        ifsc_code: {
            type: String,
            require: true
            //type: Number,
            //unique:true,
        }

    }],

    buyStrategy: [{
        name: {
            type: String,
            require: true
        },

        criteria: {
            type: String,
            require: true
        },

        companies: {
            type: String,
            required: true,
        },

        amount: {
            type: Number,
            required: true
        },

        date_from: {
            type: String,
            required: true
        },

        date_To: {
            type: String,
            required: true
        },

    }]

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



module.exports = { Register };
exports.validate = validateRegister;

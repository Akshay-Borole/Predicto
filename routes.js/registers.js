const bcrypt = require('bcrypt');
const { Register } = require('../models/register');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const register = await Register.find();
    res.send(register);
});


router.post('/', async (req, res) => {
    console.log(req.body);

    let register = new Register({
        username: req.body.username,
        email: req.body.email,
        mobileno: req.body.mobileno,
        altmobileno: req.body.altmobileno,
        //password: securePassword,
        //confirmpassword: securePassword,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword

    });
    const salt = await bcrypt.genSalt(10);
    register.password = await bcrypt.hash(register.password, salt);
    //register.confirmpassword = await bcrypt.hash(register.confirmpassword, salt);

    register = await register.save();
    res.send(register);
    //    }
});

router.put('/:id', async (req, res) => {
    const register = await Register.findByIdAndUpdate(req.params.id,
        {
            username: req.body.username,
            email: req.body.email,
            mobileno: req.body.mobileno,
            altmobileno: req.body.altmobileno,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        }, { new: true });
    if (!register)
        return res.status(404).send('The user with given ID was not found.');
    res.send(register);
});

router.delete('/:id', async (req, res) => {
    const register = await Register.findByIdAndRemove(req.params.id);
    if (!register)
        res.status(404).send('The user with given ID was not found.');
    res.send(register);
});

router.get('/:id', async (req, res) => {
    const register = await Register.findById(req.params.id);
    if (!register)
        return res.status(404).send('The user with given ID was not found.');
    res.send(register);
});

module.exports = router;

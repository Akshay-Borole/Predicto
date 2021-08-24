const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Login } = require('../models/login');
const { Register } = require('../models/register');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
router.get('/', async (req, res) => {
    const userLogin = await Register.findOne({ email: req.body.email });
    res.send(userLogin);
});
router.post('/', async (req, res) => {
    //console.log(req.body);
    let userLogin = await Register.findOne({ email: req.body.email });
    if (!userLogin) {
        return res.status(400).json({ "status": false, "msg": "incorrect email" });
    }
    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password,
        userLogin.password);
    if (!validPassword) {
        return res.status(400).json({ "status": false, "msg": "incorrect passw" });
    }
    const token = jwt.sign({ _id: userLogin._id }, 'PrivateKey');
    res.json({ "status": true, "token": token, "email": req.body.email, "password": req.body.password });
    //res.send(token);
});
module.exports = router;

const jwt = require('jsonwebtoken');
const { Register } = require('../models/register');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const buyDetails = await Register.find({ _id: userid });
    res.send(buyDetails);

});

router.post('/', async (req, res) => {
    console.log("buyDetails");
    var userid = jwt.decode(req.body.token);
    const buyStrategy = await Register.updateMany({ _id: userid }, {
        $push: {
            buyStrategy: [{
                name: req.body.name,
                criteria: req.body.criteria,
                companies: req.body.companies,
                date_from: req.body.date_from,
                date_to: req.body.date_to
            }]
        }
    });
    // res.send(200);
});

module.exports = router;

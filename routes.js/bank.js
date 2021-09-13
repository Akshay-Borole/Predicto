const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const path = require('path');
const { Register } = require('../models/register');
const { decode } = require("punycode");

//create bank details in database
router.post('/', async (req, res) => {
    console.log("bankDetails");
    var userid = jwt.decode(req.body.token);
    const bankDetails = await Register.updateMany({ _id: userid }, {
        $push: {
            bankDetails: [{
                account_no: req.body.account_no,
                bank_name: req.body.bank_name,
                branch_add: req.body.branch_add,
                ifsc_code: req.body.ifsc_code
            }]
        }
    });
    console.log("bankDetails");// res.send(200);
});
module.exports = router;

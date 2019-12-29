const cors = require('cors');

const express = require('express');
const logic = require('../logic/auth');

const router = express.Router();

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    return logic.loginUser(email, password, req, res);
});


router.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    return logic.registerUser(email, password, req, res);
});


module.exports = router;
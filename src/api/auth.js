const express = require('express');
const logic = require('../logic/auth');
const loginRequired = require('../helpers/auth-middleware');

const router = express.Router();

router.post('/logout', (req, res) => {
    return logic.logoutUser(req, res);
});

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


router.post('/info', loginRequired, (req, res) => {
    return logic.getLoggedUserInfo(req, res);
});


module.exports = router;
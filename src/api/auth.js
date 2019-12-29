const cors = require('cors');

const express = require('express');
const models = require('../models');
const sha256 = require('../helpers/sha256');
const router = express.Router();

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email && password) {
        models.User.findOne({
            where: {
                email: email,
                password: sha256(password)
            }
        }).then(user => {
            if (user) {
                req.session.loggedin = true;
                req.session.email = email;
                return res.send();
            }
            res.status(500).send('Błędne hasło lub e-mail!');
        })
    } else {
        res.status(500).send('Błędne hasło lub e-mail!');
        res.end();
    }
});


router.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const nickName = req.body.nickName;

    if (email && password) {
        models.User.findOne({
            where: {
                email: email,
                password: sha256(password)
            }
        }).then(user => {
            if (user) {
                req.session.loggedin = true;
                req.session.email = email;
                return res.send();
            }
            res.status(500).send('Błędne hasło lub e-mail!');
        })
    } else {
        res.status(500).send('Błędne hasło lub e-mail!');
        res.end();
    }
});
module.exports = router;
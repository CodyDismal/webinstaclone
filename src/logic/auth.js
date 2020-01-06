const models = require('../models');
const sha256 = require('../helpers/sha256');

module.exports = {
    loginUser(email, password, req, res) {
        if (email && password) {
            return models.User.findOne({
                where: {
                    email: email,
                    password: sha256(password)
                }
            }).then(user => {
                if (user) {
                    req.session.loggedin = true;
                    req.session.email = email;
                    req.session.userId = user.id;
                    return res.send({
                        userId: user.id,
                        redirectToFillInfo: !user.isActive
                    });
                }
                res.status(500).send('Błędne hasło lub e-mail!');
            })
        } else {
            res.status(500).send('Błędne hasło lub e-mail!');
            res.end();
        }
    },

    registerUser(email, password, req, res) {
        if (email && password) {
            return models.User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (user) {
                    res.status(500).send('To konto już istnieje!');
                    return res.send();
                }

                models.User.create({
                    email: email,
                    password: sha256(password),
                    isActive: false
                }).then(user => {
                    models.ActivationLink.create({
                        UserId: user.id,
                        link: user.id + Math.random().toString(36).substring(2, 15)
                    }).then(link => {
                        res.status(200);
                        return res.send();
                    });
                });
            });
        } else {
            res.status(500).send('Brakujące hasło lub e-mail!');
            res.end();
        }
    }
};
const models = require('../models');
const sha256 = require('../helpers/sha256');

module.exports = {
    getLoggedUserInfo(req, res) {
        return undefined;
    },

    logoutUser(req, res) {
        req.session.loggedin = false;
        req.session.email = null;
        req.session.userId = null;
        return res.send();
    },

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
                    models.Observation.create({
                        observatorId: user.id,
                        observableId: user.id
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
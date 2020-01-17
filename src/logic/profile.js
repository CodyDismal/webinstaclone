const models = require('../models');


module.exports = {
    setProfileData(data, req, res) {
        models.User.update(
            {
                firstName: data.firstName,
                lastName: data.lastName,
                biography: data.description,
                nickname: data.nickname,
                isActive: true
            },
            {
                where: {
                    id: req.session.userId
                }
            }).then(user => {
            if (user) {
                return res.send({
                    userId: req.session.userId
                });
            }
            return res.status(500);
        });
    },

    getProfileData(userId, req, res) {
        return models.User.findOne({
            where: {
                id: userId
            },
            attributes: [
                'nickname', 'biography', 'firstName', 'lastName'
            ],
            include: [
                {
                    model: models.Post
                }
            ]

        }).then(userData => {
            return res.send(userData);
        });
    }
};
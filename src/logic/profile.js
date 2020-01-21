const models = require('../models');


module.exports = {
    getProfileData(userId, req, res) {
        return models.User.findOne({
            where: {
                id: userId
            },
            attributes: [
                'nickname', 'biography', 'firstName', 'lastName', 'id'
            ],
            include: [
                {
                    model: models.Post,
                    include: [
                        {
                            model: models.Like
                        }
                    ]
                }
            ]

        }).then(userData => {
            return res.send(userData);
        });
    },

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
    }
};
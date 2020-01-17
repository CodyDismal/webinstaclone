const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    getFeed(req, res) {
        if (!req.session.userId) {
            return res.send([]);
        }
        return models.Observation.findAll({
            where: {
                observatorId: req.session.userId
            },
            attributes: ['observableId']
        }).then(userIds => {
            if (!userIds) {
                return [];
            }
            const userIntIds = [];
            userIds.forEach((userId, index) => {
                userIntIds.push(userId.dataValues.observableId);
            });
            return models.Post.findAll({
                where: {
                    userId: {
                        [Op.or]: userIntIds
                    }
                },
                order: [
                    ['id', 'DESC'],
                ],
                include: [
                    {
                        model: models.User,
                        as: 'User'
                    },
                    {
                        model: models.Like,
                        as: 'Like',
                        required: false
                    }
                ]

            }).then(posts => {
                if (!posts) {
                    return res.send([]);
                }
                return res.send(posts);
            })
        });
    }
};

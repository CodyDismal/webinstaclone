const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = {
    followUser(userId, req, res) {
        return models.Observation.findOrCreate({
            where: {
                observatorId: req.session.userId,
                observableId: userId
            },
            defaults: {
                observatorId: req.session.userId,
                observableId: userId
            }
        }).then(observation => res.send(observation));
    },

    isFollowingUser(userId, req, res) {
        return models.Observation.findOne({
            where: {
                observatorId: req.session.userId,
                observableId: userId
            },
            attributes: ['id']
        }).then(observation => res.send(observation));
    }
};

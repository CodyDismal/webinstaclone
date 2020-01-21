const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = {
    put(postId, req, res) {
        models.Like.findOne({
            where: {
                PostId: postId
            }
        }).then(like => {
            models.Like.update({
                    count: like.count + 1,
                },
                {
                    where: {
                        PostId: postId
                    }
                });
            const result = {
                likes: like.count + 1
            };
            return res.send(result);
        });
    }
};
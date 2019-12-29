'use strict';
module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    }, {});
    Like.associate = function (models) {
        Like.belongsTo(models.User);
        Like.belongsTo(models.Post);
    };
    return Like;
};
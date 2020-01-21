'use strict';
module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        count: {
            type: DataTypes.INTEGER
        }
    }, {});
    Like.associate = function (models) {
        Like.belongsTo(models.User);
        Like.belongsTo(models.Post);
    };
    return Like;
};
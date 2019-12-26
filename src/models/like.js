'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    id: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.user);
    Like.belongsTo(models.post);
  };
  return Like;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User);
    Comment.belongsTo(models.Post);
  };
  return Comment;
};
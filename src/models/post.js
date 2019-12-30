'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    fileName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User);
    Post.hasMany(models.Comment);
  };
  return Post;
};
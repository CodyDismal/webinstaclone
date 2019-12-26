'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    biography: DataTypes.STRING,
    nickname: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    User.hasMany(models.post);
    User.hasMany(models.like);
    User.hasMany(models.comment);
    User.hasMany(models.observation);
    User.hasOne(models.activationLink);
  };
  return User;
};
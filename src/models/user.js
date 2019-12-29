'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    biography: DataTypes.STRING,
    nickname: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post);
    User.hasMany(models.Like);
    User.hasMany(models.Comment);
    User.hasMany(models.Observation);
    User.hasOne(models.ActivationLink);
  };
  return User;
};
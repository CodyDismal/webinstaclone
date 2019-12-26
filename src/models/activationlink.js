'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActivationLink = sequelize.define('ActivationLink', {
    link: DataTypes.STRING
  }, {});
  ActivationLink.associate = function(models) {
    ActivationLink.belongsTo(models.user);
  };
  return ActivationLink;
};
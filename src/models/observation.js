'use strict';
module.exports = (sequelize, DataTypes) => {
  const Observation = sequelize.define('Observation', {
    id: DataTypes.INTEGER
  }, {});
  Observation.associate = function(models) {
    Observation.belongsTo(models.user, {as: 'observatorId'});
    Observation.belongsTo(models.user, {as: 'observableId'});
  };
  return Observation;
};
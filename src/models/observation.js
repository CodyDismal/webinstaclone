'use strict';
module.exports = (sequelize, DataTypes) => {
  const Observation = sequelize.define('Observation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
  }, {});
  Observation.associate = function(models) {
    Observation.belongsTo(models.User, {as: 'observatorId'});
    Observation.belongsTo(models.User, {as: 'observableId'});
  };
  return Observation;
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Likes', 'count', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {

  }
};

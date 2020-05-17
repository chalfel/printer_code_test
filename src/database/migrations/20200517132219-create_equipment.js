'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('equipment', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        // category: {
        //   type: Sequelize.ENUM,
        //   values: ['cartucho', 'toner'],
        //   allowNull: false,
        // },
        category: Sequelize.STRING,
        ppm: Sequelize.INTEGER,
        wifi: Sequelize.BOOLEAN,
        consume: Sequelize.REAL,
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('equipment');
  }
};

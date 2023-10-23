'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      // Create the "Users" table
      await queryInterface.createTable('Users', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        balance: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 0,
          },
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }, { transaction });

      // Insert the initial user
      await queryInterface.bulkInsert('Users', [{
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], { transaction });
    });
  },

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      // Remove the "Users" table
      await queryInterface.dropTable('Users', { transaction });
    });
  },
};

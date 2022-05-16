'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('issues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      severity: {
        type: Sequelize.INTEGER,
        default: 3
      },
      project_id: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.INTEGER,
        default: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('issues');
  }
};
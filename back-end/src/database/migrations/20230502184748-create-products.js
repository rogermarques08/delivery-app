'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: true,
        type: Sequelize.DECIMAL(4, 2),
      },
      urlImage: {
        field: 'url_image',
        allowNull: true,
        type: Sequelize.STRING,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('sales_products', {
    saleId: {
      field: 'sale_id',
      allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
    },
    productId: {
      field: 'product_id',
      allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER,
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};

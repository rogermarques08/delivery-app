
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      sellerId: {
        field: 'seller_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      totalPrice: {
        field: 'total_price',
        allowNull: true,
        type: Sequelize.DECIMAL(9, 2),
      },
      deliveryAddress: {
        field: 'delivery_address',
        allowNull: true,
        type: Sequelize.STRING,
      },
      deliveryNumber: {
        field: 'delivery_number',
        allowNull: true,
        type: Sequelize.STRING,
      },
      saleDate: {
        field: 'sale_date',
        allowNull: true,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  },
};

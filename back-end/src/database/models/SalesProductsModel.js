module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false,},
    productId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false,},
    quantity: DataTypes.INTEGER, allowNull: false,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });
  return SaleProduct;
  }

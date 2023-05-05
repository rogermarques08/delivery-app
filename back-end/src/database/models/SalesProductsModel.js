const Sale = require('./SalesModel');

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false,},
    productId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false,},
    quantity: DataTypes.INTEGER, allowNull: false,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  });

  // SaleProduct.associate = (models) => {
  //   models.Sale.belongstoMany(models.Products,
  //     {
  //       as: 'products',
  //       through: SaleProduct,
  //       foreignKey: 'saleId',
  //       otherKey: 'productId',
  //   });

  //   models.Products.belongsToMany(models.Sale, {
  //     as: 'sales',
  //     through: SaleProduct,
  //     foreignKey: 'productId', 
  //     otherKey: 'saleId',
  //   })
  // };
  return SaleProduct;
  }

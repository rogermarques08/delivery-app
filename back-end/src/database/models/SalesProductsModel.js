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

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId', 
      otherKey: 'saleId',
    });
  };
  
  return SaleProduct;
};


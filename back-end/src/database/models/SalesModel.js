module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    userId: { type: DataTypes.INTEGER, foreign: true, allowNull: false },
    sellerId: { type: DataTypes.INTEGER, foreign: true, allowNull: false },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: {type: DataTypes.STRING,  allowNull: false },
    deliveryNumber: {type: DataTypes.STRING,  allowNull: false },
    saleDate: {type: DataTypes.DATE, allowNull: false},
    status: {type: DataTypes.STRING,  allowNull: false},
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });

  return Sale;
}
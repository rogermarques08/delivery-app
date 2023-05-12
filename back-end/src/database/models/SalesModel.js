module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
'Sale', 
{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, references: { model: 'UsersModel', key: 'id' }, allowNull: false },
    sellerId: { type: DataTypes.INTEGER, references: { model: 'UsersModel', key: 'id' } , allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL(9, 2), allowNull: false },
    deliveryAddress: { type: DataTypes.STRING, allowNull: false },
    deliveryNumber: { type: DataTypes.STRING, allowNull: false },
    saleDate: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.ENUM('Pendente', 'Preparando', 'Em Trânsito', 'Entregue'), allowNull: false },
  },
{
    timestamps: true,
    underscored: true,
    tableName: 'sales',
    createdAt: 'saleDate',
    updatedAt: false,
  },
);

Sale.associate = (models) => {
  Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
};
  return Sale;
};
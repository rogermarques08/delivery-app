const Sale = require('./SalesModel');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
'User', 
{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {type: DataTypes.STRING, defaultValue: 'customer'}
  },
{
    timestamps: false,
    underscored: true,
    tableName: 'users',
  },
);

User.associate = (models) => {
  User.hasMany(models.Sale, { foreignKey: 'userId', as: 'user' });
  User.hasMany(models.Sale, { foreignKey: 'sellerId', as: 'seller' });
};

  return User;
};

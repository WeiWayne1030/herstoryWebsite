'use strict'

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo (models.Stock, { foreignKey: 'StockId' }),
      Cart.belongsTo (models.Order, { foreignKey: 'OrderId' })
    }
  }
  Cart.init({
    itemQuantity: DataTypes.DECIMAL,
    OrderId: DataTypes.INTEGER,
    StockId: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'Carts'
  })
  return Cart
}
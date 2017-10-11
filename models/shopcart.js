import Sequelize from 'sequelize'
import sequelize from '../db'
import Product from './product'

export default sequelize.define('shopcart', {
  id: {
    type: Sequelize.INTEGER(20),
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Product,
      key: 'productId'
    }
  },
  productAccount: {
    type: Sequelize.INTEGER(20),
    allowNull: false
  },
  openId: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'shopcart',
  engine: 'InnoDB'
})
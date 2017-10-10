import Sequelize from 'sequelize'
import sequelize from '../db'

export default sequelize.define('product', {
  productId: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    allowNull: false
  }
}, {
  tableName: 'product',
  engine: 'InnoDB'
})
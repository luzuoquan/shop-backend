import Sequelize from 'sequelize'
import sequelize from '../db'

export default sequelize.define('shopcart', {
  id: {
    type: Sequelize.INTEGER(20),
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '商品id'
  },
  productAccount: {
    type: Sequelize.INTEGER(20),
    allowNull: false
  },
  openId: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '用户唯一标志'
  },
  thumbnails: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'shopcart',
  engine: 'InnoDB'
})
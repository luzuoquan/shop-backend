import Sequelize from 'sequelize'
import sequelize from '../db'

export default sequelize.define('product', {
  productId: {
    type: Sequelize.STRING,
    primaryKey: true,
    comment: '商品Id',
    allowNull: false
  },
  productName: {
    type: Sequelize.STRING,
    comment: '商品名称',
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '价格'
  },
  distribution: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '配送方式'
  },
  inventory: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '库存'
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '图片'
  }
}, {
  tableName: 'product',
  engine: 'InnoDB'
})
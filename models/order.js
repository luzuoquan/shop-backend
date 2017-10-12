import Sequelize from 'sequelize'
import sequelize from '../db'

export default sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER(20),
    primaryKey: true,
    autoIncrement: true
  },
  orderId: {
    type: Sequelize.STRING,
    comment: '订单Id',
    allowNull: false
  },
  orderName: {
    type: Sequelize.STRING,
    comment: '订单名称',
    allowNull: false
  },
  orderMoney: {
    type: Sequelize.STRING,
    comment: '订单金额',
    allowNull: false
  },
  orderTime: {
    type: Sequelize.DATE,
    comment: '订单完成时间',
    allowNull: false
  },
  openId: {
    type: Sequelize.STRING,
    comment: '订单所属用户openId',
    allowNull: false
  },
  productIds: {
    type: Sequelize.STRING,
    comment: '订单对应的productId',
    allowNull: false
  }
}, {
  tableName: 'order',
  engine: 'InnoDB'
})
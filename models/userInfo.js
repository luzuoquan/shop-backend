import Sequelize from 'sequelize'
import sequelize from '../db'

const UserInfo = sequelize.define('userInfo', {
  id: {
    type: Sequelize.INTEGER(20),
    primaryKey: true,
    autoIncrement: true
  },
  openId: {
    type: Sequelize.STRING,
    unique: true
  },
  address: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'userInfo',
  engine: 'InnoDB'
})
export default UserInfo
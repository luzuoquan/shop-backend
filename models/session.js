import Sequelize from 'sequelize'
import sequelize from '../db'

export default sequelize.define('session', {
  sessionId: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  sessionKey: {
    type: Sequelize.STRING,
    comment: 'sessionKey',
    allowNull: false
  },
  openId: {
    type: Sequelize.STRING,
    comment: 'openId',
    allowNull: false
  }
}, {
  tableName: 'session',
  engine: 'InnoDB'
})
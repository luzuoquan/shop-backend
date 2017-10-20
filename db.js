import Sequelize from 'sequelize'
import config from './config/dbconfig.json'

const env = process.env.NODE_ENV
let dbConfig = {}

if (env === 'development') {
  dbConfig = config.development
} else {
  dbConfig = config.production
}

export default new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.option)
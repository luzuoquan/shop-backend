import Sequelize from 'sequelize';
import sequelize from '../db';

const User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER(20),
		primaryKey: true,
		autoIncrement: true
	},
	openId: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	sessionKey: Sequelize.STRING
}, {
	tableName: 'user',
	engine: 'InnoDB'
})
export default User;
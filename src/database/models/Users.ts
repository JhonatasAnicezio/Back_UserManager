import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class User extends Model {
	declare readonly id: number;
	declare name: string;
	declare role: string;
	declare email: string;
	declare password: string;
}

User.init({
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: INTEGER,
	},
	name: {
		allowNull: false,
		type: STRING,
	},
	email: {
		allowNull: false,
		type: STRING,
	},
	password: {
		allowNull: false,
		type: STRING,
	},
	role: {
		allowNull: false,
		type: STRING,
	},
}, {
	sequelize: db,
	underscored: true,
	timestamps: false,
	modelName: 'users',
});

export default User;
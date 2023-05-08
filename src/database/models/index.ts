import { Sequelize } from 'sequelize';
const config = require('../config/config');

const sequelize = new Sequelize(config);

export default sequelize;
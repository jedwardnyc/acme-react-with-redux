const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/react_redux_db')

module.exports = conn;
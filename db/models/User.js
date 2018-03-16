const { Sequelize } = require('../conn');
const conn = require('../conn');

const User = conn.define('user', {
  name: Sequelize.STRING
});

module.exports = User; 
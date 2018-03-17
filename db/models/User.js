const { Sequelize } = require('../conn');
const conn = require('../conn');

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
    }
  }
});

module.exports = User; 
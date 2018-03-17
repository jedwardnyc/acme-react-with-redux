const conn = require('./conn');
const User = require('./models/User');
const faker = require('faker');

const syncAndSeed = () => {
  conn.sync({force: true})
    .then(()=>{
      return Promise.all([
        User.create({name: faker.internet.userName('jacob', 'rico')}),
        User.create({name: faker.internet.userName()}),
        User.create({name: faker.internet.userName()}),
        User.create({name: faker.internet.userName()}),
        User.create({name: faker.internet.userName()}),
      ])
    })
}

module.exports = {
  syncAndSeed,
  User
}


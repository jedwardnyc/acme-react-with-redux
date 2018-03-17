const conn = require('./conn');
const User = require('./models/User');

const syncAndSeed = () => {
  conn.sync({force: true})
    .then(()=>{
      return Promise.all([
        User.create({name: 'Logic'}),
        User.create({name: 'Run The Jewels'}),
        User.create({name: 'Watsky'}),
        User.create({name: 'J-Reeks'}),
      ])
    })
}

module.exports = {
  syncAndSeed,
  User
}


const conn = require('./conn');
const User = require('./models/User');

const syncAndSeed = () => {
  conn.sync({force: true})
    .then(()=>{
      return Promise.all([
        User.create({name: 'Larry'}),
        User.create({name: 'Curly'}),
        User.create({name: 'Moe'}),
      ])
    })
}

module.exports = {
  syncAndSeed,
  User
}


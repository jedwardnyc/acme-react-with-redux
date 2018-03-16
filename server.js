const express = require('express');
const app = express();
const path = require('path');

app.use(require('body-parser').json())

app.get('/', (req,res,next)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', (req,res,next)=>{
  User.findAll()
    .then( users => res.send(users))
    .catch(next)
});

app.get('/api/users/:id', (req,res,next)=>{
  User.findById(req.params.id)
    .then( user => res.send(user))
})

app.post('/api/users/', (req,res,next)=>{
  User.create(req.body)
    .then( user => res.send(user))
})

app.delete('/api/users/:id', (req,res,next)=>{
  User.findById(req.params.id)
    .then( user => user.destroy())
    .then( () => res.sendStatus(204))
})

app.put('/api/users/:id', (req,res,next)=>{
  User.findById(req.params.id)
    .then( user => user.update(req.body))
    .then( user => res.send(user))
})

app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.use('/vendor', express.static('node_modules'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));

const db = require('./db');
const { User } = db;

db.syncAndSeed()


import React from 'react';
import { Link } from 'react-router-dom';
import store, { getUser, getUsers, getNewUsers, deleteUser } from "../store";
import axios from 'axios';

export default class Users extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    axios.get('/api/users')
      .then( res => res.data )
      .then( users => store.dispatch(getUsers(users)))
    this.unsubscribe = store.subscribe( () => this.setState(store.getState()))
  }

  componentWillUnmount () {
    this.unsubscribe();
  };
  
  handleEvent(ev){
    store.dispatch(getUser(ev.target.value))
  }

  handleSubmit(ev){
    ev.preventDefault()
    const user = this.state.user;
    console.log(user)
    axios.post('/api/users', { name: user })
      .then( res => res.data )
      .then( users => store.dispatch(getNewUsers(users)) )
  }

  handleDelete(ev, user){
    ev.preventDefault()
    axios.delete(`/api/users/${user.id}`)
      .then( res => res.data )
      .then( () => {
        const users = this.state.users.filter(_user => _user.id === user.id*1 ? false : true)
        store.dispatch(deleteUser(users)) 
      })
  }

  render(){
    return(
      <div>
        <h1>Users</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleEvent} placeholder='User Name' />
          <button className='btn btn-primary'> Create </button>
        </form>
        <ul className="list-group">
          {
            this.state.users.map(user => {
              return ( 
                <li className="list-group-item" key={user.id}> 
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                  <br />
                  <button className='btn btn-danger' onClick={(ev) => this.handleDelete(ev, user) }> Delete </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
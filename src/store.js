import { createStore } from 'redux';

const GOT_USERS_FROM_SERVER = 'GOT_USERS_FROM_SERVER';
const WRITE_USER = 'WRITE_USER';
const UPDATE_USER = 'UPDATE_USER';
const GOT_NEW_USERS = 'GOT_NEW_USERS';
const DELETE_USER = 'DELETE_USER'

const initialState = {
  users: [],
  user: ''
};

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case GOT_USERS_FROM_SERVER:
      return Object.assign({}, state, { users: action.users });
    case WRITE_USER:
      return Object.assign({}, state, { user: action.user });
    case GOT_NEW_USERS:
      return Object.assign({}, state, { users: [...state.users, action.users]});
    case DELETE_USER:
      return Object.assign({}, state, { users: action.users })
    default:
      return state;
  };
};

export const getUsers = users => {
  return { type: GOT_USERS_FROM_SERVER, users };
};

export const getUser = user => {
  return { type: WRITE_USER, user };
};

export const getNewUsers = users => {
  return { type: GOT_NEW_USERS, users };
}

export const deleteUser = users => {
  return { type: DELETE_USER, users }
}
// export const updateUser = user => {
//   return { type: UPDATE_USER, user }
// }

const store = createStore(reducer);
export default store;


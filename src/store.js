import { createStore } from 'redux';

const GOT_USERS_FROM_SERVER = 'GOT_USERS_FROM_SERVER';
const WRITE_USER = 'WRITE_USER';
const GOT_NEW_USERS = 'GOT_NEW_USERS';
const CLEAR = 'CLEAR';
const ERROR = 'ERROR';


const initialState = {
  users: [],
  user: '',
  error: ''
};

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case GOT_USERS_FROM_SERVER:
      return Object.assign({}, state, { users: action.users });
    case WRITE_USER:
      return Object.assign({}, state, { user: action.user });
    case GOT_NEW_USERS:
      return Object.assign({}, state, { users: [...state.users, action.users]});
    case CLEAR:
      return Object.assign({}, state, { user:  action.user, error: action.error })
    case ERROR:
      return Object.assign({}, state, { error: action.error })
    default:
      return state;
  };
};

export const getUsers = users => {
  return { type: GOT_USERS_FROM_SERVER, users };
};

export const getUser = user => {
  return { type: WRITE_USER, user: user };
};

export const getNewUsers = users => {
  return { type: GOT_NEW_USERS, users };
}

export const clear = () => {
  return { type: CLEAR,  user: '', error: '' };
};

export const errorHandler = error => {
  return { type: ERROR, error: error }
}

const store = createStore(reducer);
export default store;


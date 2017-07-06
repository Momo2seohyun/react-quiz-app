import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducerUser } from './userReducer';

const reducer = {
  user: reducerUser,
  form: formReducer,
}

export default combineReducers(reducer);
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer = {
  form: formReducer,
}

export default combineReducers(reducer);
import { combineReducers } from 'redux';
import  socialReducer from './social.reducer';
import { reducer as form } from 'redux-form';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
  social: socialReducer,
  form: form,
  auth: authReducer
});

export default rootReducer;

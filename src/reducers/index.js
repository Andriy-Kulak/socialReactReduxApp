import { combineReducers } from 'redux';
import  SocialReducer from './socialReducer';
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';

console.log("index reducer social", SocialReducer);
console.log("form reducer social", form);

const rootReducer = combineReducers({
  social: SocialReducer,
  form: form,
  auth: authReducer
});

export default rootReducer;

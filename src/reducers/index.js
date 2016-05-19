import { combineReducers } from 'redux';
import  SocialReducer from './socialReducer';
import { reducer as form } from 'redux-form';

console.log("index reducer social", SocialReducer);
console.log("form reducer social", form);

const rootReducer = combineReducers({
  social: SocialReducer,
  form: form
});

export default rootReducer;

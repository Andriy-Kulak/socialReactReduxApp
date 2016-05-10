import { combineReducers } from 'redux';
import  SocialReducer from './socialReducer';

const rootReducer = combineReducers({
  social: SocialReducer
});
console.log('Reducer index TEST');

export default rootReducer;

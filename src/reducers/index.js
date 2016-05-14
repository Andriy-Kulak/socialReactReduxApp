import { combineReducers } from 'redux';
import  SocialReducer from './socialReducer';

const rootReducer = combineReducers({
  social: SocialReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { userReducers } from './userReducers';
import { locationReducers } from './locationReducers';

const rootReducers = combineReducers({
  userReducers,
  locationReducers
});

export default rootReducers;

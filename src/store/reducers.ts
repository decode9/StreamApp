import { combineReducers } from 'redux';
import auth from './auth/reducer';
import intermittence from './intermittence/reducer';

const reducers = combineReducers({
  auth,
  intermittence
});

export default reducers;

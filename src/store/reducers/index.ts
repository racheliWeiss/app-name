
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import dataReducer from './dataReducer'
import customerReducer from './customerReducer';

export default combineReducers({
  error: errorReducer,
  authReducer: authReducer,
  dataReducer:dataReducer,
  customerReducer:customerReducer,
});
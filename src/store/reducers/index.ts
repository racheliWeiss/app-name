
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import dataReducer from './dataReducer'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  dataReducer:dataReducer,
});
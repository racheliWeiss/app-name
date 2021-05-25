import {createStore,combineReducers} from 'redux';
import userReducer from './userReducers'

const reducer=combineReducers({userReducer})
const store=createStore(reducer)

export default store;
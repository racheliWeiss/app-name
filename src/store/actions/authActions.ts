import axios from 'axios'
import { returnErrors } from './errorActions'
import {
    USERֹֹ_LOADED,
    USERֹֹ_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from '../actions/types'
import { IAuthFunction, IConfigHeaders, IUser } from '../../Models/type/interface';
import User from '../../Models/User';
import { basicUrl } from '../../shared/config';
//cheack token&load user
// const api=
export const loadUser = () => (dispatch: any, getState: any) => {
    //User loading
    dispatch({ type: USERֹֹ_LOADING });
    axios.get('api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USERֹֹ_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}  
// Login User
export const login = (loginUser :User) => (
    dispatch: Function
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const user={
      login_entity_number:loginUser.LoginEntityNumber,
      login_ID:loginUser.LoginID,
      login_password:loginUser.LoginPassword
    }
    // Request body
    const body = JSON.stringify(user);
  
    axios
      .post(basicUrl+'/login', body, config)
      .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: LOGIN_FAIL
        });
      });
  };
  
  // Logout User
  export const logout = () => {
    return {
      type: LOGOUT_SUCCESS
    };
  };
  
  // Setup config/headers and token
  export const tokenConfig = (getState: Function) => {
    // Get token from localstorage
    const token = getState().auth.token;
  
    // Headers
    const config: IConfigHeaders = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
}


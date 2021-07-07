import axios from 'axios'
import { returnErrors } from './errorActions'
import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from '../actions/types'
import {IConfigHeaders} from '../../modelsType/type/interface';
import { User } from '../../modelsType/User';
import { basicUrl } from '../../shared/config';
//cheack token&load user
// const api=
// export const loadUser = () => (dispatch: Function, getState: Function) => {
//   const entity =
//   {
//     "id_client ": 45654784,

//     "enum_type": "class",

//     "id_initiator": 478541,

//     "enum_request_method": "read",

//     "category": "customer",

//     "user_language": "HE"
//   }
//   const body = JSON.stringify(entity);

//   //User loading
//   dispatch({ type: USERֹֹ_LOADING });
  
//   axios.post(basicUrl + "/uspEnum", body, tokenConfig(getState))
//     .then((res) => {
//       try {
//         console.log(res.data)
//         dispatch({
//           type: USERֹֹ_LOADED,
//           payload: res.data
//         })
//       }
//       catch (e) {
//         console.log(res, e)
//       }
//     })
//     .catch(err => {
//       err.response ? returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL') : returnErrors('the server is down pls try later', 'LOGIN_FAIL')
//       dispatch({
//         type: AUTH_ERROR
//       })
//     })
// }




// Login User
export const login = (loginUser: User) => (
  dispatch: Function
) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const user = {
    login_request_method: "login",
    login_entity_number: loginUser.LoginEntityNumber,
    login_ID: loginUser.LoginID,
    login_password: loginUser.LoginPassword
  }
  // Request body
  const body = JSON.stringify(user);
  console.log(user);

  axios
    .post(basicUrl + '/login',user , config)
    .then(res =>{
      try{
        
        console.log("USERLOGIN",user);
        if(res.data=="dont login")
        {
          console.log("dont login",res.data)
          dispatch({
            type:LOGIN_FAIL ,
            isAuthentitcated:false
          })
        }
        else{
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          })
        }
      }
      catch{
        dispatch({ type:AUTH_ERROR , isAuthentitcated:false});
      }
    })
    .catch(err => {
      console.log("login gui",err)
      dispatch(
        err.response ? returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL') : returnErrors('the server is down pls try later', 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => (
  dispatch: Function
) => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

export const logout1 = (dispatch: any) => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
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


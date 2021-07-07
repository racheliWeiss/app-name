import axios from 'axios';
import { basicUrl } from '../../shared/config';
import {FETCH_PROTECTED_DATA_REQUEST,LOGIN_FAIL,RECEIVE_PROTECTED_DATA,SET_IS_FETCHING}from './types'
import { checkHttpStatus} from '../../utils';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';


export function receiveProtectedData(data:any) {
    return {
        type: RECEIVE_PROTECTED_DATA,
        payload: {
            data: data
        }
    }
}

export function fetchProtectedDataRequest() {
  return {
    type: FETCH_PROTECTED_DATA_REQUEST
  }
}
const objectData = [{"enumType":"class","category":"customer","name":"customerCondition"},
{"enumType": "entity_sub_type" ,"category":"customer","name" :"customerType"},
{"enumType":"gender" ,"category":"customer","name":"genders"},
{"enumType": "type" ,"category":"customer","name" :"typeIdentityNumber"},
{"enumType": "status" ,"category":"customer","name" :"customerStatus"},
]
export const loadUser = () => (dispatch: Function, getState:Function ) => {
  objectData.map( obj =>{
  const entity =
    {
      "id_client ": 45654784,
  
      "enum_type": obj.enumType,
  
      "id_initiator": 478541,
  
      "enum_request_method": "read",
  
      "category": obj.category,
  
      "user_language": "HE"
    }
    const body = JSON.stringify(entity);
  
    //User loading
    // dispatch({ type:FETCH_PROTECTED_DATA_REQUEST  });
    dispatch({ type:SET_IS_FETCHING , isFeting:true});
    console.log(getState)
    axios.post(basicUrl + "/uspEnum", entity, tokenConfig(getState))
        .then(checkHttpStatus)
      .then((res) => {
        try {
          console.log('i got: ', res)
          dispatch({ type:SET_IS_FETCHING , isFeting:false});
          dispatch({
            type: RECEIVE_PROTECTED_DATA,
             value: res.data,
             valueType:obj.name
          })
        }
        catch (e) {
          console.log("errordata",res, e)
        }
      })
      .catch(err => {
        console.log("dataerror",err)
        err.response ? returnErrors(err.response.data, err.response.status, 'GET_ERRORS') : returnErrors('the server is down pls try later', 'LOGIN_FAIL')
        dispatch({
          type: LOGIN_FAIL
        })

      })
  
});
}


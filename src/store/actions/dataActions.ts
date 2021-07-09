import axios from 'axios';
import { basicUrl } from '../../shared/config';
import {FETCH_PROTECTED_DATA_REQUEST,LOGIN_FAIL,RECEIVE_PROTECTED_DATA,SET_IS_FETCHING}from './types'
import { checkHttpStatus} from '../../utils';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

const blankOptionsMap = {
  customersCondition: null,
  customersType:null,
  genders:null,
  typeIdentityNumbers:null,
  customersStatus: null
}

const objectData = [{"enumType":"class","category":"customer","name":"customersCondition"},
{"enumType": "entity_sub_type" ,"category":"customer","name" :"customersType"},
{"enumType":"gender" ,"category":"customer","name":"genders"},
{"enumType": "type" ,"category":"customer","name" :"typeIdentityNumbers"},
{"enumType": "status" ,"category":"customer","name" :"customersStatus"},
]

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
export const loadOptions = () => async (dispatch: Function, getState:Function ) => {
  const optionsPrm = objectData.map( async currObj =>{
  const entity =
    {
      "id_client ": 45654784,
  
      "enum_type": currObj.enumType,
  
      "id_initiator": 478541,
  
      "enum_request_method": "read",
  
      "category": currObj.category,
  
      "user_language": "HE"
    }

  
      
    const res =await axios.post(basicUrl + "/uspEnum", entity, tokenConfig(getState))
        .then(checkHttpStatus)
        //if failed:
        .catch(err => {
          console.log("dataerror",err)
          err.response ? returnErrors(err.response.data, err.response.status, 'GET_ERRORS') : returnErrors('the server is down pls try later', 'LOGIN_FAIL')
          dispatch({
            type: LOGIN_FAIL
          })
          dispatch({ type:SET_IS_FETCHING , isFetching:true});
          // return "";
        })
        return res.data;
        
    });
      const options = await Promise.all(optionsPrm)
      const optionsMap = {...blankOptionsMap}
      objectData.forEach(({name}, idx)=> {
        //@ts-ignore
        optionsMap[name] = options[idx]
      })

      dispatch({type: 'SET_GENERAL_FORM_OPTIONS_MAP', optionsMap})
      
    }
    
    
    
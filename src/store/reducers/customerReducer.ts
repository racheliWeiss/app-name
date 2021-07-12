import {CREATE_CUSTOMER, CREATE_FAIL, READ_CUSTOMER, READ_FAIL} from '../actions/types';

const initialState = {
    dataCustomer: null,
    isCreate:null
}

export default function(state=initialState,action:any){
    switch(action.type){
        case READ_CUSTOMER:
        case CREATE_CUSTOMER:
            return{
                ...state,
                dataCustomer:action.value,
            }
        case CREATE_FAIL:
            return {
                ...state,
                isCreate :false 
            }      
        case READ_FAIL:
             return{
                 ...state,
                 isCreate :false 
             }
         default: return state;   
          
    }

}
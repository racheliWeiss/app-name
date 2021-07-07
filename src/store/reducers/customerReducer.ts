import {CREATE_CUSTOMER} from '../actions/types';

const initialState = {
    dataCustomer: [],
    isCreate:false
}

export default function(state=initialState,action:any){
    switch(action.type){
        case CREATE_CUSTOMER:
            return{
                ...state,
                dataCustomer:action.value
            }
         default: return state;   
          
    }

}
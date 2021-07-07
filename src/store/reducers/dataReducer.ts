import {FETCH_PROTECTED_DATA_REQUEST,RECEIVE_PROTECTED_DATA,SET_IS_FETCHING} from '../actions/types';

const initialState = {
    data :{
        generalFormOptionsMap:{
            genders: null
            ,
            typeIdentityNumber:null
            ,
            customerStatus:null,
             
            customerCondition:null,
            
            customerType:null,
        }
    },
};

export default function(state=initialState,action:any ){
    switch(action.type){
        case 'SET_GENERAL_FORM_OPTIONS_MAP':
        return {
            ...state,
            data: {
            ...state.data,
            generalFormOptions: action.optionsMap
            }
        }
        // case RECEIVE_PROTECTED_DATA:
            
        //     return {
        //         ...state,
        //        data:{
        //            ...state.data,
        //            [action.valueType]: action.value
        //        }

        //       }
        //       // set isLoading true  
        // case  FETCH_PROTECTED_DATA_REQUEST:
        //     console.log(state)
        //     return {
        //         ...state,
        //         isFetching: true
        //     } 
            
        // case  SET_IS_FETCHING:
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     } 
            
        default: return state;   
    }       
}       

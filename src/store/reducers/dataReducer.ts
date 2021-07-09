import {FETCH_PROTECTED_DATA_REQUEST,RECEIVE_PROTECTED_DATA,SET_IS_FETCHING} from '../actions/types';

const initialState = {
    data :{
        generalFormOptionsMap:null
               // genders: null
            // ,
            // typeIdentityNumbers:null
            // ,
            // customersStatus:null,
             
            // customersCondition:null,
            
            // customersType:null,
        
        
            
    },
};

export default function(state=initialState,action:any ){
    switch(action.type){
        case 'SET_GENERAL_FORM_OPTIONS_MAP':
        return {
            ...state,
            data: {
            ...state.data,
            generalFormOptionsMap: action.optionsMap
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

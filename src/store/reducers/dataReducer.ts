import {FETCH_PROTECTED_DATA_REQUEST,RECEIVE_PROTECTED_DATA,SET_IS_FETCHING} from '../actions/types';

const initialState = {
    data :{
         genders: []
        ,
        typeIdentityNumber:[]
        ,
        customerStatus:[],
         
        customerCondition:[],
        
        customerType:[]
    },
    isFetching: false
};

export default function(state=initialState,action:any ){
    switch(action.type){
        case RECEIVE_PROTECTED_DATA:
            console.log(state)
            return {
                ...state,
               data:{
                   ...state.data,
                   [action.valueType]: action.value
               }

              }
              // set isLoading true  
        case  FETCH_PROTECTED_DATA_REQUEST:
            console.log(state)
            return {
                ...state,
                isFetching: true
            } 
            
        case  SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            } 
            
        default: return state;   
    }       
}       

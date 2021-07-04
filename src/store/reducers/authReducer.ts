import{USERֹֹ_LOADED,
    USERֹֹ_LOADING,
     AUTH_ERROR,
     LOGIN_SUCCESS,
     LOGIN_FAIL,
     LOGOUT_SUCCESS,
     REGISTER_SUCCESS,
     REGISTER_FAIL}from'../actions/types'

 const initialState={
   token:localStorage.getItem('token'),
   isAuthentitcated:null,
   isLoading:false,
   user:null
 };

 export default function(state=initialState,action:any){
    switch(action.type){
        case USERֹֹ_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case USERֹֹ_LOADED:
            return{
                ...state,
                // isAuthenticted:true,  
                isLoading:false,
                user:action.payload
            };
        case LOGIN_SUCCESS:    
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthentitcated:true,  
                isLoading:false, 
            };
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT_SUCCESS:
            case REGISTER_FAIL:
                localStorage.removeItem('token');
                return{
                    ...state,
                    token:null,
                    user:null,  
                    isAuthentitcated:false,
                    isLoading:false
                }    
            default: return state;
    }
}
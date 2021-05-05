import produce from 'immer'
import creatReducer from './reducer'

const initialState={
    login_user:{
        _id:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
      
    },

}

const user={
    saveUser(state:any,action:any){
        state.login_user=action.payload
    }
}

export default produce((state,action)=>creatReducer(state,action,user),initialState);
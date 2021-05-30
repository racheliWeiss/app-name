import { IMsg } from '../../Models/type/interface';
import {GET_ERRORS, CLEAR_ERRORS} from './types';

export const returnErrors = (msg:IMsg, status:string, id:any=null)=>{
    return{
        type:GET_ERRORS,
        payload:{msg,status,id}
    };
}

export const clearErrors=()=>{
    return{
        type:CLEAR_ERRORS
    };
}
import { IMsg } from '../../modelsType/type/interface';
import {GET_ERRORS, CLEAR_ERRORS} from './types';

export const returnErrors = (msg:IMsg | string, status:string, id:any=null)=>{
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
import react from 'react';
import { E_ERROR } from './enum';

export default interface ComponenetProps {
    onChange: any
    id: string
  }

  export interface ITarget {
    target: {
      value: React.SetStateAction<string>;
    };
    preventDefault(): void;
  }
  
  // ERRORS
  export interface IMsg {
    msg: string | any;
  }
  
  // AUTH
  export interface IUser {
    LoginEntityNumber?: string;
    LoginID: string;
    LoginPassword: string;
  }
  
  export interface IAuthForm {
    isAuthenticated?: boolean;
    error: IError;
    // clearErrors(): void;
  }
  
  export interface ILoginModal extends IAuthForm {
    login(user: IUser): void;
  }
  
  export interface IRegisterModal extends IAuthForm {
    register(user: IUser): void;
  }
  
  export interface ILogoutProps {
    logout(): void;
  }
  
  export interface IError {
    id: E_ERROR;
    msg: IMsg;
  }
  
  export interface IAuthReduxProps {
    authReducer: { isAuthenticated: boolean };
    error: IError;
  }
  
  export interface IConfigHeaders {
    headers: {
      [index: string]: string;
    };
  }
  
  // NAVBAR
  export interface IAppNavbar {
    auth?: {
      isAuthenticated: boolean;
    
    };
  }
  
  // ITEMS
  export interface IExistingItem {
    _id: string;
    name: string;
  }
  
  export interface IItem {
    _id?: string;
    name: string;
  }
  
  export interface IItemModal {
    isAuthenticated: boolean;
    addItem(item: IItem): void;
  }
  
  export interface IItemReduxProps extends IAuthReduxProps {
    item: {
      items: IExistingItem[];
    };
  }
  
  export interface IShoppingList {
    item: {
      items: IExistingItem[];
    };
    getItems(): void;
    deleteItem(id: string): void;
    isAuthenticated: boolean;
  }
  
  // <<<<<<<<<<<>>>>>>>>>>>>
  // <<<<<<<< FLUX >>>>>>>>>
  // <<<<<<<<<<<>>>>>>>>>>>>
  
  export interface IAuthFunction {
    login_entity_number?: string;
    login_password?: string;
    login_ID: string;
    // login_finger_print:string;
  }
  
  export interface IReturnErrors {
    msg: {
      msg: string | any;
    };
    status: string;
    id: any;
  }
  
  export interface IAction {
    type: string;
    payload?: any;
  }

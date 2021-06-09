
import React, { useEffect }  from 'react';
import { connect, Provider, useSelector } from 'react-redux'
import { i18n } from "./translations/i18n";
import AppNav from './components/AppNav';
// import  '../scss/base.scss';
import { useState } from 'react';
import Home from './components/Home';
import { createStore } from 'redux';
import {loadUser} from './store/actions/authActions'
import store from './store/store';
import Logout from './components/auth/Logout';
import { IAppNavbar, IAuthReduxProps } from './Models/type/interface';


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const handleOnclick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    // setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  // const isLogin=useSelector(state=>state.auth.payload)

  return (
    <>
    <Provider store={store}> 
        {/* <Login/> */}
          <AppNav/>
         {/* <Logout/> */}
      {/* <Home/>  */}
     </Provider>
    </>
  );
}

export default (App)


import React, { useEffect }  from 'react';
import { Provider, useSelector } from 'react-redux'
import { i18n } from "./translations/i18n";
import Login from './components/Login';
// import  '../scss/base.scss';
import { useState } from 'react';
import Home from './components/Home';
import { createStore } from 'redux';
import {loadUser} from './store/actions/authActions'
import store from './store/store';
import Logout from './components/auth/Logout';


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const handleOnclick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    // setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  // const isLogin=useSelector(state=>state.value)

  return (
    <>
    <Provider store={store}> 
        <Login/>
        <Logout/>
       
      {/* <Home/>  */}
     </Provider>
    </>
  );
}

export default App;

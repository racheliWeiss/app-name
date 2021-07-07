



import React, { useEffect }  from 'react';
import { connect, Provider, useSelector } from 'react-redux'
import { i18n } from "./translations/i18n";
import AppNav from './components/AppNav';
// import  '../scssPages/base.scss';
import { useState } from 'react';
import Home from './components/Home';
import { createStore } from 'redux';
import store from './store/store';
import Logout from './components/auth/Logout';
import { loadOptions } from './store/actions/dataActions';



function App() {
  // useEffect(() => {
  //   store.dispatch(loadOptions()); 
  // }, []);
  const handleOnclick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    // setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };



  return (
    <>
    <Provider store={store}> 
          <AppNav/>
         {/* <Logout/> */}
     
     </Provider>
    </>
  );
}

export default App;



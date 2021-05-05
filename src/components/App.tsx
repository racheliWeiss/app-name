
import React, { SyntheticEvent }  from 'react';
import { Provider } from 'react-redux'
import store from '../store/configureStore';
import { i18n } from "../translations/i18n";


import Login from './Login';
import { MyComponent } from './TransTry';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState("en");
 

  const handleOnclick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
   
      
    <Provider store={store}>
      <button value="he" onClick={handleOnclick}>
         Hebrew
      </button>
      <button value="en" onClick={handleOnclick}>
        English
      </button>
      <Login/>
       <MyComponent lang={language}/>
        
       
    <h1>hello</h1>
    </Provider>
  );
}

export default App;

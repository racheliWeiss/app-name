
import React  from 'react';
import { Provider } from 'react-redux'
import store from '../store/configureStore';
import { i18n } from "../translations/i18n";
import Login from './Login';
// import  '../scss/base.scss';
import { useState } from 'react';
import Home from './Home';



function App() {
  // const [language, setLanguage] = useState("");
 

  const handleOnclick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    // setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
   
 
    <Provider store={store}>
     
       {/* <button value="he" onClick={handleOnclick}>
         Hebrew
      </button>
      <button value="en" onClick={handleOnclick}>
        English 
      </button>  */}
{/*    
      <Login/> */}
       <Home/>
     {/* <Login/> */}
    
    </Provider>
  );
}

export default App;

import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import  '../scssPages/base.scss';
import { Route } from 'react-router-dom';

const  Home=()=> {
    return( 
        <>
    <div className="grid-container">
        <Header />
        <Sidebar/>
        {/* <Route path="/" exact component={CustomerDetails}/> */}
    </div>
  

    </>  
    
    )
    
}

export default Home;
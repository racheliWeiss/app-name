import React from 'react';
import styled from 'styled-components';
import CustomerDetails from './CustomerDetails';
import Header from './Header';
import Login from './Login';
import Sidebar from './sidebar/Sidebar';
import Subheading from '../shared/components/Subheading';
import  '../scss/base.scss';




const  Home=()=> {
    return(
    <div className="grid-container">
        <Header />
        {/* <Login/> */}
      
        
       
        <Sidebar/>
        {/* <Login/> */}
        
      
    </div>
    )
    
}

export default Home;
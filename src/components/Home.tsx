import React from 'react';
import styled from 'styled-components';
import CustomerDetails from './CustomerDetails';
import Header from './Header';
import Login from './Login';
import Sidebar from './sidebar/Sidebar';
import Subheading from '../shared/components/Subheading';




const  Home=()=> {
    return(
    <div>
        <Header />
        {/* <Login/> */}
      
        
       
        <Sidebar/>
        {/* <Login/> */}
        
      
    </div>
    )
    
}

export default Home;
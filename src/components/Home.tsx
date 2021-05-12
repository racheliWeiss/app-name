import React from 'react';
import styled from 'styled-components';
import CustomerDetails from './CustomerDetails';
import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import Subheading from './Subheading';




const  Home=()=> {
    return(
    <div>
        <Header />
      
      
       
        <Sidebar/>
        {/* <CustomerDetails/> */}
      
    </div>
    )
    
}

export default Home;
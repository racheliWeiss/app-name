import React from 'react';
import styled from 'styled-components';
import CustomerDetails from './CustomerDetails';
import Header from './Header';
import Login from './Login';
import Sidebar from './sidebar/Sidebar';
import Subheading from '../shared/components/Subtitle';
import  '../scss/base.scss';
import ContentSideCustomers from './sidebar/ContentSideCustomers';
import SideCustomers from './sidebar/SideCustomers';
import { SideMain } from './sidebar/SideMain';





const  Home=()=> {
    return(
    <div className="grid-container">
        <Header />
        {/* <Login/> */}
        {/* <SideMain/>
        <ContentSideCustomers/>
        <SideCustomers /> */}
       
        <Sidebar/>
        {/* <Login/> */}
        
      
    </div>
    )
    
}

export default Home;
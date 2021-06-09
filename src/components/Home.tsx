import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import  '../scssPages/base.scss';
import { Route } from 'react-router-dom';
import CustomerDetails from './customerDetails/CustomerDetails';
import SubHeader from './SubHeader';

const  Home=()=> {
    return( 
    <div className="grid-container">
        <Header />
       
        {/* <SideMain/>
        <ContentSideCustomers/>
        <SideCustomers /> */}
        <Sidebar/>
        <Route path="/" exact component={CustomerDetails}/>

      
        {/* <Login/> */}
    </div>
    
    )
    
}

export default Home;
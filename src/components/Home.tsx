import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import  '../scssPages/base.scss';

const  Home=()=> {
    return( 
    <div className="grid-container">
        <Header />
        {/* <SideMain/>
        <ContentSideCustomers/>
        <SideCustomers /> */}
        <Sidebar/>
      
        {/* <Login/> */}
    </div>
    )
    
}

export default Home;
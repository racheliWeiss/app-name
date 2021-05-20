import React from 'react';


import '../../scss/sidebar.scss'
import ContentSideCustomers from './ContentSideCustomers';
import SideCustomers from './SideCustomers';
import { SideMain } from './SideMain';






const Sidebar = () => {
    return (

      

               <>
               <div className='sidebar'>
                <SideMain/>
              
                <ContentSideCustomers/>
                

                </div>
                <SideCustomers />
                 

        </>
    );
}
export default Sidebar;
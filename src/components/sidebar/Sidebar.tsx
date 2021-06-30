import React from 'react';
import '../../scssPages/sidebar.scss'
import ContentSideCustomers from './ContentSideCustomers';
import SideCustomers from './SideSubCustomers';
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
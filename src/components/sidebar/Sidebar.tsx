import React from 'react';
import  SideDemo  from './SideDemo';

import '../../scss/sidebar.scss'
import { SideOption } from './SideOption';



const Sidebar = () => {
    return(
        <div>
         <div className="userName"></div>
           <div className="sidebar">
          
           {/* <div className="catgory"></div> */}
           {/* <table>
           <tr>
           <td>           <NavOption/>
</td>
           <td>           <NavDemo/>
</td>
           </tr>
           </table> */}
               <SideOption/>
               <SideDemo/>
           </div>
        </div>
    );

}
export default Sidebar;
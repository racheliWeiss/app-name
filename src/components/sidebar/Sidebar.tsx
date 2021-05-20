import React from 'react';
import SideDemo from './SideDemo';

import '../../scss/sidebar.scss'
import { SideOption } from './SideOption';



const Sidebar = () => {
    return (

        <>
{/* 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <div className="container-fluid">
                            <div className="rowsidebar ">
                                <div className="col-1 ">
                                    <div className="d-flex justify-content-end align-items-stretch">
                                        <SideOption />
                                    </div>
                                </div>
                                <div className="col-11">
                                    <SideDemo />    </div>

                            </div>
                            <div className="col-6"></div>
                        </div>

                    </div>


                </div>

            </div> */}


            {/* <div> */}
            {/* <div className="userName"></div> */}
            {/* <div className="sidebar"> */}

            {/* <div className="catgory"></div> */}
            {/* <table>
           <tr>
           <td>           <NavOption/>
</td>
           <td>           <NavDemo/>
</td>
           </tr>
           </table> */}
            {/* <SideOption />
                    <SideDemo />
                </div>
//             </div> */}

            <div className="sidebar">
                <SideOption />
                <SideDemo />

            </div> 

        </>
    );
}
export default Sidebar;
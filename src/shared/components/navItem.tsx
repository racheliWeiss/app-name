import * as React from 'react';
import { nav } from '../../modelsType/NavItems';

import '../../scssPages/sidebar.scss';



const  NavItem =(props:nav) =>{
    return(

        <div className="choose">
            <p>{props.text}</p>
        </div>
    
    )
   
    }
export default NavItem;
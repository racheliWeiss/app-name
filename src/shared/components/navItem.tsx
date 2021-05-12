import * as React from 'react';
import { nav } from '../../Models/NavItems';

import '../../scss/sidebar.scss';



const  NavItem =(props:nav) =>{
    return(

        <div className="choose">
            <p>{props.text}</p>
        </div>
    
    )
   
    }
export default NavItem;
import * as React from 'react';
import '../../scss/sub-header.scss';

interface Title{
    title:string
}

const Subheading=(prop:Title)=>{
    return(
        <div  className="sub-heading">
        <h1 >{prop.title}</h1>
        </div>
        // className="subBar"
    )
}

export default Subheading;
import * as React from 'react';
import  '../scss/form.scss';
 
interface Title{
    title:string
}

const Subheading=(prop:Title)=>{
    return(
        <h1 className="subBar">{prop.title}</h1>
    )
}

export default Subheading;
import * as React from 'react';
import  '../scss/form.scss';
 
interface Title{
    title:string
}

const Subheading=(prop:Title)=>{
    return(
        <h1 className="SubBar">{prop.title}</h1>
    )
}

export default Subheading;
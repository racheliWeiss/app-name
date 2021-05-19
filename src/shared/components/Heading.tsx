import * as React from 'react';
// import  '../scss/sub-header.scss';
 
interface Title{
    title:string
}

const Heading=(prop:Title)=>{
    return(
        <div className='heading'>
        <h1  className="title-componenta">{prop.title}</h1>
        </div>
        // className="subBar"
    );
} 

export default Heading;
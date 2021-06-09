import * as React from 'react';
import '../../scssPages/sub-header.scss';

interface Title{
    title:string
}

const Subtitle =(prop:Title)=>{
    return(
        <div  >
        <h1 className="subtitle ">{prop.title}</h1>
        </div>
        // className="subBar"
    )
}

export default Subtitle;
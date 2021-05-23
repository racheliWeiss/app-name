import * as React from 'react';
import '../../scss/form.scss';
 
interface Title{
    title:string
}

const TitleText=(prop:Title)=>{
    return(
      
        <h1  className="title-text">{prop.title}</h1>
       
        // className="subBar"
    );
} 

export default TitleText;
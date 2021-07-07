
import '../../scssPages/sub-header.scss';
 
interface Title{
    title:string
}

const Title=(prop:Title)=>{
    return(
      
        <h1  className="title">{prop.title}</h1>
       
        // className="subBar"
    );
} 

export default Title;
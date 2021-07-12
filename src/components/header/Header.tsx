
import './header.scss';
import { Logout } from '../auth/Logout';
import { useTranslation } from 'react-i18next';
import { connect, useSelector } from 'react-redux';
import { IAppNavbar } from '../../modelsType/type/interface';


const Header = ({ auth }: IAppNavbar) => {
  const [t, i18n] = useTranslation();
  // const handleLogout = ()=>{
  //   <Link  to="/logout"></Link>
  // }
  
  const isLogin = useSelector((state:any)=>{
    if(state.authReducer.isAuthentitcated){
      console.log("islogin:",state.authReducer.isAuthentitcated)
      let obj = JSON.parse(state.authReducer.user)
      let name = obj.data.user.first_name +" "+obj.data.user.last_name;
       return name; 
    }
    return "I8";
      
  });
  // const isLogin = useSelector((state) => state.auth)
    
  return (
    <>
      <div className="header">
        <div className="user">
          <p className="user-name">{isLogin}</p>
      
         <Logout />
         </div>
         <div className='divider'></div>
         <div className="name-company">
          <p >InSight Systems 2.0</p>
        
      </div>
        
     
        {/* <FontIcon iconName="IncreaseIndentArrowMirrored" className="logoutIcon"/> */}
      </div>
      {/* למה זה לא מופיעה */}
    
    </>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,

 
});

export default connect(mapStateToProps, null)(Header);

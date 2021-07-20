
import './header.scss';
import { Logout } from '../auth/Logout';
import { useTranslation } from 'react-i18next';
import { connect, useSelector } from 'react-redux';
import { IAppNavbar } from '../../modelsType/type/interface';
import { useEffect, useState } from 'react';


const Header = ({ auth }: IAppNavbar) => {
  const [t, i18n] = useTranslation();
  const [userName,setUserName]=useState("");
  // const handleLogout = ()=>{
  //   <Link  to="/logout"></Link>
  // }
  
  const  authReducer  = useSelector(({ authReducer }: any) => authReducer)
   
  useEffect(() => {
    console.log("authReducer?.",authReducer)
    if (!authReducer?.data?.user) return
    console.log("authReducer.data.user.first_name ",authReducer.data.user.first_name +" "+authReducer.data.user.last_name)
    setUserName(authReducer.data.user.first_name +" "+authReducer.data.user.last_name);
  }, [authReducer]);
  // const isLogin = useSelector((state) => state.auth)
    
  return (
    <>
      <div className="header">
        <div className="user">
          <p className="user-name">{userName}</p>
      
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

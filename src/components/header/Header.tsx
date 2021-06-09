import { IconButton, FontIcon, registerIcons } from '@fluentui/react';
import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logout } from '../auth/Logout';
import { useTranslation } from 'react-i18next';
import { connect, useSelector } from 'react-redux';
import { IAppNavbar, IAuthReduxProps } from '../../modelsType/type/interface';
import SubHeader from '../SubHeader';

const Header = ({ auth }: IAppNavbar) => {
  const [t, i18n] = useTranslation();
  // const handleLogout = ()=>{
  //   <Link  to="/logout"></Link>
  // }
  
  const isLogin = useSelector((state:any)=>{
       return state.auth.user.login_ID
  });
    
  return (
    <>
      <div className="header">
        <div className="user">
          <p className="user-name">{isLogin}</p>
        </div>
        <Logout />
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

const mapStateToProps = (state: IAuthReduxProps) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Header);

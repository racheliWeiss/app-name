import { IconButton, FontIcon, registerIcons, Button, PrimaryButton, Nav } from '@fluentui/react';
import React from 'react';
import '../scss/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route } from 'react-router';
import { Logout } from './auth/Logout';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { IAppNavbar, IAuthReduxProps } from '../Models/type/interface';

const Header = ({ auth }: IAppNavbar) => {
  const [t, i18n] = useTranslation();
  // const handleLogout = ()=>{
  //   <Link  to="/logout"></Link>
  // }
  
  const isLogin = useSelector((state:any)=>{
       console.log(state.auth.user.login_entity_number)
       return state.auth.user.login_ID
  });
    
  return (
    <>
      <div className="header">
        <div className="user">
          <p className="user-name">{isLogin}</p>
        </div>
        <div className='divider'></div>
        <div className="name-company">
          <p >InSight Systems 2.0</p>
        </div>

        {/* <FontIcon iconName="IncreaseIndentArrowMirrored" className="logoutIcon"/> */}
      </div>
      {/* למה זה לא מופיעה */}
      {/* <Logout /> */}
    </>
  )
}

const mapStateToProps = (state: IAuthReduxProps) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Header);

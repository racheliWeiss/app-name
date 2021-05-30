import React from 'react';
import { connect } from 'react-redux';
import Login from   './Login';
import Home from   './Home';
import { IAppNavbar, IAuthReduxProps } from '../Models/type/interface';

const AppNav = ({ auth }: IAppNavbar)=>{
    return(
        <>
        <Login/>
        {auth && auth.isAuthenticated ?<Home/> :<Login/> }
        </>
    );
   

};
const mapStateToProps = (state: IAuthReduxProps) => ({
    auth: state.auth
  });

export default connect(mapStateToProps, null)(AppNav)
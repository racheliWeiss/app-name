import React from 'react';
import {  useSelector } from 'react-redux';
// import { IAppNavbar, IAuthReduxProps } from '../Models/type/interface';
import Home from './Home';
import Login from './auth/Login';
// import Login from './Login';


const AppNav = ()=>{
    const isLogin = useSelector((state:any)=>{
        return state.auth.isAuthenticted;
     })
    return(
        <>
            {/* <Login/> */}
            {isLogin ?<Home/> :<Login/>}
            {/* {auth && auth.isAuthenticated ?<Home/> :<Login/> } */}
        </>
    );
   

};
// const mapStateToProps = (state: IAuthReduxProps) => ({
//     auth: state.auth
//   });
export default AppNav;
// export default connect(mapStateToProps, null)(AppNav)
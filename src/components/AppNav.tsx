import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { IAppNavbar, IAuthReduxProps } from '../Models/type/interface';
import Home from './Home';
import Login from './auth/Login';
import { logout1 } from '../store/actions/authActions';
// import Login from './Login';


const AppNav = () => {
    let check = null;
    const dispatch = useDispatch()
    const isLogin = useSelector((state: any) => {
        check = state.auth.isAuthentitcated;
        console.log(check)
        return check
    })
    const [isLog, setIsLog] = useState(isLogin)

    if (isLog === false) {
        logout1(dispatch)
    }

    return (
        <>
            {/* <Login/> */}
            {console.log("check hoih", isLogin)}
            {isLogin ?  <Home /> :<Login />}
           
            {/* {auth && auth.isAuthenticated ?<Home/> :<Login/> } */}
        </>
    );


};
// const mapStateToProps = (state: IAuthReduxProps) => ({
//     auth: state.auth
//   });
export default AppNav;
// export default connect(mapStateToProps, null)(AppNav)
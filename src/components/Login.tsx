import { useState } from 'react';
import '../scss/login.scss';
import { connect } from 'react-redux';
import { TextField } from '@fluentui/react/lib/TextField';
import { initializeIcons, PrimaryButton } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import { login } from '../store/actions/authActions';
import { IAuthReduxProps, ILoginModal } from '../Models/type/interface';
// import { clearErrors } from '../store/actions/errorActions';

initializeIcons();

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//       saveUser: () =>
//         dispatch({
//           type: "USER_DATA",
//           login_user: { firstName: "s", lastName: "a" }
//         })
//     };
//   };
// const mapStateToProps = (state: any) => {
//     return {
//         firstName: state.login_user.firstName,
//         lastName: state.login_user.lastName,
//     }
// }

const Login = ({
    isAuthenticated,
    error,
    login,
    // clearErrors
  }: ILoginModal) => {
    class User{
        LoginEntityNumber:string;
        LoginPassword:string;
        LoginID:string;
        LoginFingerPrint:string;
        constructor( loginEntityNumber = "",loginPassword = "",loginID="", loginFingerPrint = "" ){
            this.LoginEntityNumber=loginEntityNumber;
            this.LoginPassword=loginPassword;
            this.LoginID=loginID;
            this.LoginFingerPrint=loginFingerPrint
        }
    }
    const [t, i18n] = useTranslation();
    const [msg, setMsg] = useState(null);
    const [modal, setModal] = useState(false);
    const [userLogin, setUserLogin] = useState(new User('') );

    const updateUserLogin = (key: string, value:any ) => {
        let newUser = { ...userLogin};
        (newUser as any)[key] = value;
        setUserLogin(newUser);
      }
    //   const handleToggle = useCallback(() => {
    //     // Clear errors
    //     clearErrors();
    //     setModal(!modal);
    //   }, [clearErrors, modal]);
    
     function LoginTime(event: any) {
        event.preventDefault();
        login(userLogin)
    }
    return (
        <div className="grid-container-login">
            <form className="login" onSubmit={(e) => LoginTime(e)}>
                <TextField
                    id='login_entity_number'
                    className="text-field-login"
                    required
                    placeholder={t("login.business")} 
                    onChange ={(e: any) => {
                        updateUserLogin('LoginEntityNumber', e.currentTarget.value)
                   }}
                   
                   />
                <TextField
                    id='login_ID'
                    className="text-field-login"
                    required
                    placeholder={t("login.userName")}
                    onChange ={(e: any) => {
                        updateUserLogin('LoginID', e.currentTarget.value)
                   }}                   
                />
                <TextField
                    id='login_password'
                    className="text-field-login"
                    type="password"
                    placeholder={t("login.password")}
                    required
                    canRevealPassword
                    revealPasswordAriaLabel="Show password"
                    onChange ={(e: any) => {
                        updateUserLogin('LoginPassword', e.currentTarget.value)
                   }}                  
                />
                <PrimaryButton className='button' checked={false} text={t('login.sigin')} type="submit" />
            </form>
            <div className="picture" >link to img </div>
        </div >
    );    
};
const mapStateToProps = (state: IAuthReduxProps) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });


export default connect(mapStateToProps, { login })(Login);

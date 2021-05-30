import { useCallback, useState } from 'react';
import '../scss/login.scss';
import { connect } from 'react-redux';
import { TextField } from '@fluentui/react/lib/TextField';
import { initializeIcons, PrimaryButton } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import { login } from '../store/actions/authActions';
import { IAuthReduxProps, ILoginModal } from '../Models/type/interface';
import { clearErrors } from '../store/actions/errorActions';

// import { login } from '../shared/services/login.service';
// import { LoginUser } from '../Models/type/LoginUser';
// import { TextFieldBasicExample } from '../shared/components/TextFeild';

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
    // const [login_entity_number, setLogin_entity_number] = useState("");
    // const [login_password, setLogin_password] = useState("");
    // const [login_ID, setLogin_ID] = useState("");
    // const [login_finger_print] = useState("");//setLogin_finger_print
    // const [isLogin,setIsLogin]=useState(false);
    const [msg, setMsg] = useState(null);
    const [modal, setModal] = useState(false);


    const [userLogin, setUserLogin] = useState(new User('') );
    const updateUserLogin = (key: string, value:any ) => {
        let newUser = { ...userLogin};
        (newUser as any)[key] = value;
        setUserLogin(newUser);
      }
      const handleToggle = useCallback(() => {
        // Clear errors
        clearErrors();
        setModal(!modal);
      }, [clearErrors, modal]);
    

     function LoginTime(event: any) {
        event.preventDefault();
        let tokenId: string = '';
        
        // let user: LoginUser = { login_entity_number, login_password, login_ID, login_finger_print }
        login(userLogin)
        // // let res = await login(userLogin, tokenId);
        // if (res) {
        //     console.log('sucsses')
        // }
    }
    return (
        <div className="grid-container">
            <form className="login" onSubmit={(e) => LoginTime(e)}>
                <TextField
                    id='login_entity_number'
                    className="text-field"
                    required
                    placeholder={t("login.business")} 
                    onChange ={(e: any) => {
                        updateUserLogin('LoginEntityNumber', e.currentTarget.value)
                   }}
                   
                   />
                <TextField
                    id='login_ID'
                    className="text-field"
                    required
                    placeholder={t("login.userName")}
                    onChange ={(e: any) => {
                        updateUserLogin('LoginID', e.currentTarget.value)
                   }}
                   
                />
                <TextField
                    id='login_password'
                    className="text-field"
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




    // return(
    //     <form onSubmit={(e)=>LoginTime(e)}>
    //         <input  placeholder="הsetLogin_entity_number" />
    //          <input onChange={(e) => setLogin_ID(e.target.value)} placeholder="setLogin_ID" />
    //          <input onChange={(e) => setLogin_password(e.target.value)} placeholder="setLogin_password" />
    //         <button type="submit">Submit</button>
    //         <ButtonDefaultExample/>
    //         <TextFieldBasicExample/>
    //      </form>
    // ) ;     
};
const mapStateToProps = (state: IAuthReduxProps) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });


export default connect(mapStateToProps, { login })(Login);

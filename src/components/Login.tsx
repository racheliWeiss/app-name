import { useEffect, useState } from 'react';
import '../scss/login.scss';
import axios from "axios";
import { connect } from 'react-redux';
import { actions } from '../store/action';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import React from 'react';
import { initializeIcons, PrimaryButton } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import { login } from '../shared/services/login.service';
import { LoginUser } from '../Models/LoginUser';
// import { TextFieldBasicExample } from '../shared/components/TextFeild';

initializeIcons();

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'RedEye' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        saveUser: (user: string) => { dispatch(actions.saveUser(user)) }
    }
}
const mapStateToProps = (state: any) => {
    return {
        firstName: state.userReducer.login_user.firstName,
        lastName: state.userReducer.login_user.lastName,
    }
}





function Login() {
    const [t, i18n] = useTranslation();
    const [login_entity_number, setLogin_entity_number] = useState("");
    const [login_password, setLogin_password] = useState("");
    const [login_ID, setLogin_ID] = useState("");
    const [login_finger_print] = useState("");//setLogin_finger_print
    const [isLogin,setIsLogin]=useState(false);
    


    async function LoginTime(event: any) {
        event.preventDefault();
        let tokenId: string='';
        let user:LoginUser= { login_entity_number, login_password, login_ID, login_finger_print }

        let res=await login(user,tokenId);
        if(res)
        {
             console.log('sucsses')
        }
    }
    useEffect(()=>{
     console.log("effect");
    },[])



    return (
        <div className="grid-container">
            {/* <div className=""> */}
            <form className="login"onSubmit={(e) => LoginTime(e)}>
                {/* <div className="row" > */}
                    
                        {/* <div className=" col-lg-4"> */}
                            {/* <Stack horizontal tokens={stackTokens} > */}

                                {/* <Stack {...columnProps}> */}
                   
                                    <TextField

                                        className="text-field"
                                        required
                                        placeholder={t("login.business")}
                                        
                                        onChange={(e:any) =>setLogin_entity_number(e.target.value)}
                                    />


                                    <TextField

                                        className="text-field"
                                        required
                                        placeholder={t("login.userName")}
                                        
                                        onChange={(e:any) =>setLogin_ID (e.target.value)} 


                                    />
                                    {/* <div className="d-flex p-2 bd-highlight"></div> */}
                                    <TextField
                                        className="text-field"
                                        type="password"
                                        placeholder={t("login.password")}
                                        required
                                        canRevealPassword
                                        revealPasswordAriaLabel="Show password"
                                        onChange={(e:any) => setLogin_password(e.target.value)}

                                    /> 
                                    
                                    <PrimaryButton className='button' checked={false} text={t('login.sigin')} type="submit" />
                                  
                                {/* </Stack> */}

                            {/* </Stack> */}
                        {/* </div > */}
                    
                   

                {/* </div > */}
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




export default connect(mapStateToProps, mapDispatchToProps)(Login);

import { useState } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { actions } from '../store/action';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
 



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



function Login(props: any) {
    const [login_entity_number, setLogin_entity_number] = useState("");
    const [login_password, setLogin_password] = useState("");
    const [login_ID, setLogin_ID] = useState("");
    const [login_finger_print] = useState("");//setLogin_finger_print
    
   


    function LoginTime(event:any) {
        event.preventDefault();
        let tokenId:string=''
        let user :object= { login_entity_number, login_password, login_ID, login_finger_print }
     
        axios.post('https://localhost:44337/login', user,
            {
                headers: {
                    Authorization: tokenId
                }
            }
        )
            .then((respons) => {
                console.log(respons)
               // const myUser = respons.data.user;
                console.log(respons.data.user)
               localStorage.setItem("token", respons.data.token)
               console.log(tokenId)
                // saveUser(myUser);
                console.log("gd")

            })

            .catch((err) => {

                console.warn('error in login component', err)

                alert("login failed")
            })
    }
  
    return(
        <form onSubmit={(e)=>LoginTime(e)}>
        //     <input onChange={(e) => setLogin_entity_number(e.target.value)} placeholder="הsetLogin_entity_number" />
        //     <input onChange={(e) => setLogin_ID(e.target.value)} placeholder="setLogin_ID" />
        //     <input onChange={(e) => setLogin_password(e.target.value)} placeholder="setLogin_password" />
        //     <button type="submit">Submit</button>
        // </form>
    ) ;     


        //    



   
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

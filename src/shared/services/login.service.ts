import axios from "axios";
import { LoginUser } from "../../modelsType/type/LoginUser";

export async function login(user:LoginUser, tokenId: string) {

    let res = await axios.post('https://localhost:44337/login', user,
        {
            headers: {
                Authorization: tokenId
            }
        }
    )
    try {
        if (res.status === 200) {
            console.log(res.data)
            // const myUser = respons.data.user;
            console.log(res.data.user)
            localStorage.setItem("token", res.data.token)
            console.log(tokenId)
            // saveUser(myUser);
            console.log("gd")
        }
    }
    catch (err) {
        console.log(res.status)
        console.warn('error in login component', err)
        alert("login failed")
    }
    return res.data.status;
}

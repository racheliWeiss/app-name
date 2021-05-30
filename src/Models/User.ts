import react from 'react'
class  User{
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

export default User;
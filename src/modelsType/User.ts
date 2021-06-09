import react from 'react'
export class  User{
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


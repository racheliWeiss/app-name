import { useBoolean } from '@fluentui/react-hooks';
import { PrimaryButton, Dialog, DialogFooter, TextField, DefaultButton } from 'office-ui-fabric-react';
import react, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomDropdown } from '../Option';
import { CustomTextField } from '../TextField';
import { CustomToggle } from '../Toggle';
import "./dialog.scss";

interface Iprop{
    textButton:string
}


class UpdateAddress
{
  TypeAddress:Number;
  Country:string;
  StreetAndNumber:string;
  PostalCode:string;
  City:String;
  AddressDefault:boolean
  constructor(typeAddress:Number = -1, country:string="", streetAndNumber = '', city = '',postalCode ='', addressDefault=false)
  {
    this.TypeAddress=typeAddress;
    this.Country=country;
    this.StreetAndNumber=streetAndNumber;
    this.PostalCode=postalCode;
    this.City=city;
    this.AddressDefault=addressDefault
  }
}

class UpdateEmail{
  TypeAddressEmail:string;
  EmailAddress:string
  EmailDefault:boolean
  constructor(typeAddressEmail:string='', emailAddress="",emailDefault=false ){
    this.TypeAddressEmail=typeAddressEmail;
    this.EmailAddress=emailAddress;
    this.EmailDefault=emailDefault;
  }
}

class UpdatePhone
{
  TypePhone:Number;
  Phone:String
  PhoneDefault:boolean
  AreaCodeCountry:Number
  constructor(typePhone:Number = -1, phoneDefault=false, phone:string='', areaCodeCountry=0)
  {
    this.TypePhone=typePhone;
    this.PhoneDefault=phoneDefault;
    this.Phone=phone;
    this.AreaCodeCountry = areaCodeCountry;
  }
}
export const CustemDialogAddress = (props:Iprop) => {

    const{textButton} = props
    const [t, i18n] = useTranslation();
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

    const genderArray = [{ key: 1, text: t('male') }, { key: 2, text: t('female') }, { key: 3, text: t('other') }];


    const dialogContentProps = {
      title: t('updateAddress'),
    };
   

    const [address,setAddress] = useState(new UpdateAddress());

    const updateUser = (key: string, value: any) => {
      let newCus = { ...address};
      (newCus as any)[key] = value;
      setAddress(newCus);
    }
  

    return(
        <>
        <PrimaryButton  text={textButton} onClick={toggleHideDialog} />
       <Dialog hidden={hideDialog} onDismiss={toggleHideDialog} dialogContentProps={dialogContentProps}>
        <DialogFooter >
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('typeAddress')} onChange={updateUser} selectedKey={address.TypeAddress} id={'TypeAddress'} othertextInput={t('')} />
          <CustomTextField  label={t("streetAndNumber")} onChange={updateUser} id={'StreetAndNumber'}/>
          <CustomTextField  label={t("city")} onChange={updateUser} id={'City'}/>
          <CustomTextField  label={t("postalCode")} onChange={updateUser} id={'PostalCode'}/>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('country')} onChange={updateUser} selectedKey={address.Country} id={'Country'} othertextInput={t('')} />
            <CustomToggle offText={t('addressDefault')} onText={t('addressDefault')} onChange={updateUser} id={'AddressDefault'} defaultChecked={false} />
           <PrimaryButton onClick={toggleHideDialog} text={t("update")} />
           <DefaultButton onClick={toggleHideDialog} text={t("Cancel")} />
         </DialogFooter>
       </Dialog>
      
      </>
    )

}


///add phone number

export const CustemDialogPhone = (props:Iprop) => {

  const{textButton} = props
  const [t, i18n] = useTranslation();
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  const genderArray = [{ key: 1, text: t('male') }, { key: 2, text: t('female') }, { key: 3, text: t('other') }];
  const dialogContentProps = {
    title: t('updateAddress'),
  };
 
  const [phone,setPhone] = useState(new UpdatePhone());
  const updateUser = (key: string, value: any) => {
    let newCus = { ...phone};
    (newCus as any)[key] = value;
    setPhone(newCus);
  }
  return(
      <>
      <PrimaryButton  text={textButton} onClick={toggleHideDialog} />
     <Dialog hidden={hideDialog} onDismiss={toggleHideDialog} dialogContentProps={dialogContentProps}>
      <DialogFooter >
        <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('TypePhone')} onChange={updateUser} selectedKey={phone.TypePhone} id={'TypePhone'} othertextInput={t('')} />
        <CustomTextField  label={t("phone")} onChange={updateUser} id={'Phone'}/>
        <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('AreaCodeCountry')} onChange={updateUser} selectedKey={phone.AreaCodeCountry} id={'AreaCodeCountry'} othertextInput={t('')} />
          <CustomToggle offText={t('PhoneDefault')} onText={t('PhoneDefault')} onChange={updateUser} id={'AddressDefault'} defaultChecked={false} />
         <PrimaryButton onClick={toggleHideDialog} text={t("update")} />
         <DefaultButton onClick={toggleHideDialog} text={t("Cancel")} />
       </DialogFooter>
     </Dialog>
    </>
  )
}



export const CustemDialogEmail = (props:Iprop) => {

  const{textButton} = props
  const [t, i18n] = useTranslation();
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  const genderArray = [{ key: 1, text: t('male') }, { key: 2, text: t('female') }, { key: 3, text: t('other') }];
  const dialogContentProps = {
    title: t('updateEmail'),
  };
 
  const [email,setEmail] = useState(new UpdateEmail());
  const updateUser = (key: string, value: any) => {
    let newCus = { ...email};
    (newCus as any)[key] = value;
    setEmail(newCus);
  }
  return(
      <>
      <PrimaryButton  text={textButton} onClick={toggleHideDialog} />
     <Dialog hidden={hideDialog} onDismiss={toggleHideDialog} dialogContentProps={dialogContentProps}>
      <DialogFooter >
        <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('TypeEmail')} onChange={updateUser} selectedKey={email.TypeAddressEmail} id={'TypeAddressEmail'} othertextInput={t('')} />
        <CustomTextField  label={t("mailAddress")} onChange={updateUser} id={'EmailAddress'}/>
          <CustomToggle offText={t('mailDefault')} onText={t('mailDefault')} onChange={updateUser} id={'EmailDefault'} defaultChecked={false} />
         <PrimaryButton onClick={toggleHideDialog} text={t("update")} />
         <DefaultButton onClick={toggleHideDialog} text={t("cancel")} />
       </DialogFooter>
     </Dialog>
    </>
  )
}
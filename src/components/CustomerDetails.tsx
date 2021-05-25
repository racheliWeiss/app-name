import React, { useEffect, useState } from "react";
import '../scss/form.scss';
import Subheading from "../shared/components/Subtitle";
import { useTranslation } from 'react-i18next';
import { Calendar, DefaultButton, DropdownMenuItemType, IconButton, IContextualMenuItem, IContextualMenuProps, ITextFieldStyles, PrimaryButton, TextField } from "@fluentui/react";
import { useConst } from '@fluentui/react-hooks';
import { IStackProps, IStackStyles, Stack } from '@fluentui/react/lib/Stack';
import { CustomDropdown } from "../shared/components/Option";
import { CustomTextField, CustomTextFieldAddInput } from "../shared/components/TextField";
import { ButtonDefault, ButtonPrimary } from "../shared/components/Button";
import { TextFeildNote } from "../shared/components/Note";
import { CustomToggle } from "../shared/components/Toggle";
import '../scss/sub-header.scss';
import '../scss/form.scss';
import { IIconProps } from '@fluentui/react';
import Heading from "../shared/components/Title";
import Subtitle from "../shared/components/Subtitle";
import Title from "../shared/components/Title";
import TitleText from "../shared/components/TitleText";



class Customer {
  Gender: Number;
  OtherGender: String;
  OtherCustomerStatus: string;
  CustomerStatus: string;
  FirstName: string;
  LastName: string;
  CustomerLock: boolean;
  Note: string;
  DateOfBirth: Date;
  MiddleName: string;
  CustomerCondition: Number;
  CustomerType: Number;
  ViewNoteWhenPerformingAction: boolean;
  AreaOfPracticeIndustry: Number;
  CreditGroup: Number;
  Agent: Number;
  TypeIdentityNumber: Number;
  TypeIdentityNumberOther: string;
  CountryIdentityNumber: string;
  NameIDEmployee: Number;
  Adress: string;
  HouseNumber: Number;
  AddressCity: string
  IDCountryCode: string;
  Telephone: string;
  TelephoneCountryCode: Number;
  Email: string;
  constructor(firstName: string = '', gender: Number = 0, customerStatus: string = '', note = '',
    lastName = '', customerLock = false, dateOfBirth = new Date("2021-2-19"),
    otherGender = '', middleName = '', otherCustomerStatus = '', customerCondition = 0, customerType = 0, viewNoteWhenPerformingAction: boolean = false, areaOfPracticeIndustry: Number = 0, creditGroup = 0, agent = 0,
    typeIdentityNumber = 0, typeIdentityNumberOther = '', countryIdentityNumber = '', nameIDEmployee = 0, adress = '', houseNumber = 0, addressCity = '', iDCountryCode = '', telephone = '', telephoneCountryCode = 0, email = '') {
    this.Gender = gender;
    this.CustomerStatus = customerStatus;
    this.FirstName = firstName;
    this.Note = note;
    this.LastName = lastName;
    this.CustomerLock = customerLock;
    this.DateOfBirth = dateOfBirth;
    this.OtherGender = otherGender;
    this.MiddleName = middleName;
    this.OtherCustomerStatus = otherCustomerStatus;
    this.CustomerCondition = customerCondition;
    this.CustomerType = customerType;
    this.ViewNoteWhenPerformingAction = viewNoteWhenPerformingAction;
    this.AreaOfPracticeIndustry = areaOfPracticeIndustry;
    this.CreditGroup = creditGroup;
    this.Agent = agent;
    this.TypeIdentityNumber = typeIdentityNumber
    this.TypeIdentityNumberOther = typeIdentityNumberOther
    this.CountryIdentityNumber = countryIdentityNumber
    this.NameIDEmployee = nameIDEmployee;
    this.Adress = adress;
    this.HouseNumber = houseNumber;
    this.AddressCity = addressCity;
    this.IDCountryCode = iDCountryCode;
    this.Telephone = telephone
    this.TelephoneCountryCode = telephoneCountryCode;
    this.Email = email
  }
}

//varible icon
const addIcon: IIconProps = { iconName: 'Add' };
const addFriend: IIconProps = { iconName: 'AddFriend' }
const editContact: IIconProps = { iconName: 'EditContact' }
const userRemove: IIconProps = { iconName: 'UserRemove' }
const calendar: IIconProps = { iconName: 'Calendar' };
const cloudUpload: IIconProps = { iconName: 'CloudUpload' };






const CustomerDetails = () => {
  const [t, i18n] = useTranslation();
  const stackTokens = { childrenGap: 50 };
  // const stackStyles: Partial<IStackStyles> = { root: { width: 282, height: 32 } };
  // const columnProps: Partial<IStackProps> = {
  //   tokens: { childrenGap: 15 },
  //   styles: { root: { width: 300 } },
  // };
  // const ButtomStyle: Partial<IStackStyles> = { root: { width: 120, height: 35 } };

  const genderArray = [{ key: 1, text: t('male') }, { key: 2, text: t('female') }, { key: 3, text: t('other') }];
  const statusCustomerArray = [{ key: 'admin', text: t('admin') }, { key: 'user', text: t('user') }];


  ///object befor get details to componnent
  const [customer, setCustomer] = useState(new Customer(''));


  const updateUser = (key: string, value: any) => {
    let newCus = { ...customer };
    (newCus as any)[key] = value;
    setCustomer(newCus);
    console.log(customer)

  }





  return (


    <>




      <div className="sub-header">
        <Title
          title={t("customers")} />
        <div className="divider"></div>
        <PrimaryButton className='button' checked={false} text={t('createCustomer')} onClick={_alertClicked} iconProps={addFriend} />
        <DefaultButton className='button' checked={false} text={t('editing')} id={'Editing'} onClick={_alertClicked} iconProps={editContact} />
        <DefaultButton className='button' checked={false} iconProps={userRemove} text={t('deletion')} id={'Deletion'} onClick={_alertClicked} />
        <DefaultButton className='button' checked={false} text={t('save')} id={'Save'} onClick={_alertClicked} iconProps={cloudUpload} />
        <IconButton
        iconProps={{ iconName: 'PDF' }}
        styles={{
          icon: {color: 'red', fontSize: 36}
          
        }}
        className="button"
      />
       <IconButton
        iconProps={{ iconName: 'Print' }}
        styles={{
          icon: {color: 'black', fontSize: 36}
          
        }}
        className="button"
      />
         <IconButton
        iconProps={{ iconName: 'Print' }}
        styles={{
          icon: {color: 'black', fontSize: 36}
          
        }}
        className="button"
      />
         
        
      </div>

      <div className="content-wrapper">



          <Subtitle title={t("customerDetails")} />
          <div></div>
          <p className="title-text">{t('personalDetails')}</p>
          <CustomToggle onText={t('customerLock')} onChange={updateUser} id={'CustomerLock'} defaultChecked={false} offText={t('customerLock')}/>
          <hr className="hr"></hr>
          <hr className="hr text-width"></hr>
          <div>
            <CustomDropdown otherInputId={'othercustomerCondition'} hasOtherValue={true} options={statusCustomerArray} label={t('customerCondition')} onChange={updateUser} selectedKey={customer.CustomerCondition} id={'CustomerCondition'} othertextInput={t('othercustomerCondition')} />
          </div>

          <div>
            <CustomDropdown otherInputId={''} hasOtherValue={false} options={statusCustomerArray} label={t('customerStatus')} onChange={updateUser} selectedKey={customer.CustomerStatus} id={'CustomerStatus'} othertextInput={t('')} />

            <CustomDropdown otherInputId={''} hasOtherValue={false} options={statusCustomerArray} label={t('customerType')} onChange={updateUser} selectedKey={customer.CustomerType} id={'CustomerType'} othertextInput={t('')} />
            {/* </Stack> */}
          </div>
          <hr ></hr>
          <hr className="text-width"></hr>
          {/* <Stack styles={stackStyles} > */}
          {/* <Stack styles={stackStyles}> */}
          <div>
            <CustomTextFieldAddInput required={true} label={t('firstName')} onChange={updateUser} id={'FirstName'} iconProps={addIcon} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />

            <CustomTextField required={true} label={t('lastName')} onChange={updateUser} id={'LastName'} />
            <CustomTextField required={true} label={t('dateOfBirth')} onChange={updateUser} id={'DateOfBirth'} iconProps={calendar} />

            <CustomDropdown otherInputId={'OtherGender'} hasOtherValue={true} options={genderArray} label={t('gander')} onChange={updateUser} selectedKey={customer.Gender} id={'Gender'} othertextInput={t('other')} />
            <p className="title-text">{t("identityDetails")}</p>
          </div>
          <div>
            <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('areaOfPracticeOrIndustry')} onChange={updateUser} selectedKey={customer.AreaOfPracticeIndustry} id={'AreaOfPracticeOrIndustry'} othertextInput={t('')} />

            <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('creditGroup')} onChange={updateUser} selectedKey={customer.CreditGroup} id={'CreditGroup'} othertextInput={t('')} />
            <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('agent')} onChange={updateUser} selectedKey={customer.Agent} id={'Agent'} othertextInput={t('')} />

          </div>


          <hr className="hr"></hr>
          <hr className="hr text-width"></hr>
          <div>

            <CustomTextField required={true} label={t('identityNumber')} onChange={updateUser} id={'customerNumber'} />
            <CustomDropdown otherInputId={'typeIdentityNumberOther'} hasOtherValue={true} options={genderArray} label={t('typeIdentityNumber')} onChange={updateUser} selectedKey={customer.TypeIdentityNumber} id={'TypeIdentityNumberOther'} othertextInput={t('typeIdentityNumberOther')} />
            <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('countryIdentityNumber')} onChange={updateUser} selectedKey={customer.CountryIdentityNumber} id={'CountryIdentityNumber'} othertextInput={t('')} />
            <p className="title-text">{t('contactInformation')}</p>

          </div>
          <div>
            <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('nameIDEmployee')} onChange={updateUser} selectedKey={customer.NameIDEmployee} id={'NameIDEmployee'} othertextInput={t('')} />


            <CustomTextField required={true} label={t('customerNumber')} onChange={updateUser} id={'customerNumber'} />


          </div>
          <hr className="hr"></hr>
          <hr className="hr text-width"></hr>

          <div>
            <p className="title-text">{t('address')}</p>
            <hr className="hr text-width"></hr>
            <CustomTextField required={true} label={t('address')} onChange={updateUser} id={'Adress'} />
            <CustomTextField required={true} label={t('houseNumber')} onChange={updateUser} id={'HouseNumber'} />
            <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('city')} onChange={updateUser} selectedKey={customer.AddressCity} id={'AddressCity'} othertextInput={t('')} />

            <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('country')} onChange={updateUser} selectedKey={customer.IDCountryCode} id={'IDCountryCode'} othertextInput={t('')} />

          </div>
          <div>
            <p className="title-text">{t('phone')}</p>
            <hr className="hr text-width"></hr>
            <CustomTextField required={true} label={t('phone')} onChange={updateUser} id={'Telephone'} />
            <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('countryPhone')} onChange={updateUser} selectedKey={customer.TelephoneCountryCode} id={'TelephoneCountryCode'} othertextInput={t('')} />
            <p className="title-text">{t('email')}</p>
            <hr className="hr text-width"></hr>
            <CustomTextField required={true} label={t('emailAddress')} onChange={updateUser} id={'Email'} type='email' />

          </div>
          <p className="title-text">{t('note')}</p>
          <div>
            <p></p>
            <CustomToggle onText={t('viewNoteWhenPerformingAction')} onChange={updateUser} id={'ViewNoteWhenPerformingAnAction'} defaultChecked={true} offText={t('viewNoteWhenPerformingAction')} />
          </div>
          <hr className="hr"></hr>
          <hr className="hr text-width"></hr>


        </div>
        <TextFeildNote label={t('')} onChange={updateUser} id={'Note'} />
          

     
   

     </>
  );
}



function _alertClicked(): void {
        alert('Clicked');
}



export default CustomerDetails;



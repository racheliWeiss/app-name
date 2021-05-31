import React, { useEffect, useState } from "react";
import '../scss/form.scss';
import { useTranslation } from 'react-i18next';
import { CustomDropdown } from "../shared/components/Option";
import { CustomTextField, CustomTextFieldAddInput } from "../shared/components/TextField";
import { TextFeildNote } from "../shared/components/Note";
import { CustomToggle } from "../shared/components/Toggle";
import '../scss/form.scss';
import { Icons } from "../Models/Icon";
import SubHeader from "./SubHeader";
import Subtitle from "../shared/components/Subtitle";

//form's object
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
const CustomerDetails = () => {
  const [t, i18n] = useTranslation();
  const genderArray = [{ key: 1, text: t('male') }, { key: 2, text: t('female') }, { key: 3, text: t('other') }];
  const statusCustomerArray = [{ key: 'admin', text: t('admin') }, { key: 'user', text: t('user') }];

  ///object befor get details to componnent
  const [customer, setCustomer] = useState(new Customer(''));

//set state from custem component
  const updateUser = (key: string, value: any) => {
    let newCus = { ...customer };
    (newCus as any)[key] = value;
    setCustomer(newCus);
  }

  return (
    <>
      <SubHeader/>
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
          </div>
          <hr ></hr>
          <hr className="text-width"></hr>
          <div>
            <CustomTextFieldAddInput required={true} label={t('firstName')} onChange={updateUser} id={'FirstName'} iconProps={Icons.add} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />
            <CustomTextField required={true} label={t('lastName')} onChange={updateUser} id={'LastName'} />
            <CustomTextField required={true} label={t('dateOfBirth')} onChange={updateUser} id={'DateOfBirth'} iconProps={Icons.calendar} />

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






export default CustomerDetails;



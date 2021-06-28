import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { CustomDropdown } from "../../shared/components/Option";
import { CustomTextField, CustomTextFieldAddInput } from "../../shared/components/TextField";
import { TextFeildNote } from "../../shared/components/Note";
import { CustomToggle } from "../../shared/components/Toggle";
import './customerDetails.scss'
import { Icons } from "../../modelsType/Icon";
import Subtitle from "../../shared/components/Subtitle";
import '../../scssPages/sub-header.scss';
import { DefaultButton, IconButton, PrimaryButton } from "@fluentui/react";
import { IAuthReduxProps } from "../../modelsType/type/interface";
import { connect, useSelector } from "react-redux";
import { basicUrl } from "../../shared/config";
import axios from "axios";
import { SubHeader } from "./SubHeaderCustomer";
import Title from "../../shared/components/Title";


//form's object
export class Customer {
  [x: string]: any;
  Gender: Number;
  OtherGender: String;
  OtherCustomerStatus: string;
  CustomerStatus: Number;
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
  IdentityNumber: string;
  TypeIdentityNumber: string;
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
  constructor(firstName: string = '', gender: Number = 0, customerStatus: Number = 0, note = '',
    lastName = '', customerLock = false, dateOfBirth = new Date("2021-2-19"),
    otherGender = '', middleName = '', otherCustomerStatus = '', customerCondition = 0, customerType = 0, viewNoteWhenPerformingAction: boolean = false, areaOfPracticeIndustry: Number = 0, creditGroup = 0, agent = 0,
    typeIdentityNumber = "", typeIdentityNumberOther = '', identityNumber = "", countryIdentityNumber = '', nameIDEmployee = 0, adress = '', houseNumber = 0, addressCity = '', iDCountryCode = '', telephone = '', telephoneCountryCode = 0, email = '') {
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
    this.TypeIdentityNumber = typeIdentityNumber;
    this.IdentityNumber = identityNumber;
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
  const statusCustomerArray = [{ key: 1, text: t('admin') }];
  const cuntry = [{ key: "IL", text: t('male') }];
  
  
  const[listId,setListId]=useState([{}]);
  
  // const ListId = useSelector((state: any) => {
  //   let obj = JSON.parse(state.auth.user)
  //   setListId ([{ key: "idInitiator", value: obj.data.id_entity },
  //   { key: " idClient", value: obj.data.client.id_entity },
  //   { key: "id_branch", value: obj.data.branch.id_entity }])
  //   return listId;
  // });
  
  const [customer, setCustomer] = useState(new Customer(''));

  //set state from custem component
  const updateUser = (key: string, value: any) => {
    let newCus = { ...customer };
    (newCus as any)[key] = value;
    setCustomer(newCus);
  }
  const handleSubmit = () => {
    ///cheack this
    CreateCustomer(customer,[{value:1},{value:2},{value:2}])
    //e.preventDefault();
  }

  return (
    <form onSubmit={() => handleSubmit()}>

     <div className="sub-header">
      <Title
        title={t("customers")} />
      <div className="divider"></div>
      <PrimaryButton className='button'  type="submit" checked={false} text={t('createCustomer')}iconProps={Icons.addFriend} />
      <DefaultButton className='button' checked={false} text={t('editing')} id={'Editing'}  iconProps={Icons.editContact} />
      <DefaultButton className='button' checked={false} iconProps={Icons.userRemove} text={t('deletion')} id={'Deletion'}  />
      <DefaultButton className='button' checked={false} text={t('save')} id={'Save'}  iconProps={Icons.cloudUpload} />
      <IconButton
        iconProps={Icons.pdf}
        styles={{
          icon: { color: 'red', fontSize: 36 }
        }}
        className="button"
      />
      <IconButton
        iconProps={Icons.print}
        styles={{
          icon: { color: 'black', fontSize: 36 }

        }}
        className="button"
      />
      <IconButton
        iconProps={Icons.print}
        styles={{
          icon: { color: 'black', fontSize: 36 }

        }}
        className="button"
      />
       <hr className="hr"></hr>
    </div>
        {/* <SubHeader customer={customer}/> */}
      <div className="content-wrapper customerDetail-wrapper">
        <Subtitle title={t("customerDetails")} />
        <div></div>
        <p className="title-text">{t('personalDetails')}</p>
        <CustomToggle onText={t('customerLock')} onChange={updateUser} id={'CustomerLock'} defaultChecked={false} offText={t('customerLock')} />
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

          <CustomTextField required={true} label={t('identityNumber')} onChange={updateUser} id={'IdentityNumber'} />
          <CustomDropdown otherInputId={'typeIdentityNumberOther'} hasOtherValue={true} options={genderArray} label={t('typeIdentityNumber')} onChange={updateUser} selectedKey={customer.TypeIdentityNumber} id={'TypeIdentityNumber'} othertextInput={t('typeIdentityNumberOther')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={cuntry} label={t('countryIdentityNumber')} onChange={updateUser} selectedKey={customer.CountryIdentityNumber} id={'CountryIdentityNumber'} othertextInput={t('')} />
          <p className="title-text">{t('contactInformation')}</p>

        </div>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={statusCustomerArray} label={t('nameIDEmployee')} onChange={updateUser} selectedKey={customer.NameIDEmployee} id={'NameIDEmployee'} othertextInput={t('')} />
          <CustomTextField required={true} label={t('customerNumber')} onChange={updateUser} id={'customerNumber'} />
        </div>
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <p className="title-text">{t('address')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField required={true} label={t('address')} onChange={updateUser} id={'Adress'} />
          <CustomTextField label={t('houseNumber')} onChange={updateUser} id={'HouseNumber'} />
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
    </form>
  );
}

const mapStateToProps = (state: IAuthReduxProps) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(CustomerDetails);
 




//send to detail customer to save
const CreateCustomer = async (customer:Customer,ListId:any) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const createCustomer = {
    id_initiator: ListId[0].value,

    id_client: ListId[1].value,

    id_branch: ListId[2].value[0],

    entity_request_method: "create",

    ID_country_code: customer.CountryIdentityNumber,

    ID_number: customer.IdentityNumber,

    ID_type_id: customer.TypeIdentityNumber,

    status_id: customer.CustomerStatus,

    class_id: 1,

    entity_type_id: "user",

    entity_sub_type_id: customer.CustomerType,

    first_name: customer.FirstName,

    last_name: customer.LastName,

    entity_name: (customer.LastName + " " + customer.FirstName),

    first_name_en: "Amit",

    last_name_en: "Keresanty",

    entity_name_en: "Amit Keresanty",

    date_birth: customer.DateOfBirth,

    gender_id: customer.Gender,

    id_identifier: 1,

    is_identified: true,

    is_loaded_documentation: false,

    is_locked: customer.CustomerLock,

    note: customer.Note,

    permission_group_id: customer.CustomerCondition,

    return_entity: true,

    user_language: "HE",

    user_time_zone: "Israel Standard Time"

  }
  const body = JSON.stringify(createCustomer);
  console.log(body);
  let res = await axios.post(basicUrl + '/uspEntity', body, config)
  try {
    if (res.status === 200) {
      console.log(res)
      console.log("h8" + res.data)
      // const myUser = respons.data.user;
      // saveUser(myUser);
      console.log("gd")
    }
  }
  catch (err) {
    console.log(res.status)
    console.warn('error in login component', err)
    alert("login failed")
  }

} 






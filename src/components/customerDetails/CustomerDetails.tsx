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
import { DefaultButton, IconButton, List, PrimaryButton } from "@fluentui/react";
import {  useSelector } from "react-redux";
import Title from "../../shared/components/Title";
import { CreateCustomer } from "./CreateCustomer.service";


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

  const objgenders = useSelector((state: any) => {
    let objDate = state.dataReducer.data.genders
    let objGender: { key: any; text: any; }[]=[]
    objDate.map((obj: any)=>{
      objGender.push({key:obj.enum_id,text:obj.enum_value})
    })
    return objGender;
  });
  const objTypeIdentityNumbers = useSelector((state: any) => {
    let objDate = state.dataReducer.data.typeIdentityNumber
    let objtypeIdentityNumbers: { key: any; text: any; }[]=[]
    objDate.map((obj: any)=>{
      objtypeIdentityNumbers.push({key:obj.enum_id,text:obj.enum_value})
    })
    return objtypeIdentityNumbers;
  });
  const objCustomerStatus = useSelector((state: any) => {
    let objDate = state.dataReducer.data.customerStatus
    let objcustomerStatus: { key: any; text: any; }[]=[]
    objDate.map((obj: any)=>{
      objcustomerStatus.push({key:obj.enum_id,text:obj.enum_value})
    })
    return objcustomerStatus;
  });

  const objCustomerConditions = useSelector((state: any) => {
    let objDate = state.dataReducer.data.customerCondition
    let objcustomerConditions: { key: any; text: any; }[]=[]
    objDate.map((obj: any)=>{
      objcustomerConditions.push({key:obj.enum_id,text:obj.enum_value})
    })
    return objcustomerConditions;
  });

  const objCustomerTypes = useSelector((state: any) => {
    let objDate = state.dataReducer.data.customerType
    let objcustomerTypes: { key: any; text: any; }[]=[]
    objDate.map((obj: any)=>{
      objcustomerTypes.push({key:obj.enum_id,text:obj.enum_value})
    })
    return objcustomerTypes;
  });
  
  
   

  // Object.keys(objDate).map(function(key, index) {
  //      switch (index){
  //        case 1:

  //      }
  //      console.log ("key object is name",objDate.key,objDate[key]); 
  // });
  // let genders = [{ key: "1", text: "יחיד-- תושב ישראל" }, { "enum_id": "2", "enum_value": "יחיד תושב חוץ" }, { "enum_id": "3", "enum_value": "תאגיד רשום בישראל" }, { "enum_id": "4", "enum_value": "תאגיד רשום במדינה זרה" }, { "enum_id": "5", "enum_value": "אחר" }, { "enum_id": "6", "enum_value": "תושב אזור" }];
  // console.log(objgenders)
  // objDate.map((obj: any)=>{
  //   switch(obj.key){
  //     // case "genders":
  //     //   genders =objValue
  //     //   console.log(genders)
  //     default:
  //       console.log(obj.key)
  //       console.log(obj)

  //   }     
  // })
  const genders=objgenders
  const customerTypes =objCustomerTypes;
  //customer condition is'nt display on page
  const customerConditions = objCustomerConditions;
  const customerStatus=objCustomerStatus;
  const typeIdentityNumbers = objTypeIdentityNumbers

  const genderArray = [{ key: 1, text: t('male') }, { key: 2, text: t('female') }, { key: 3, text: t('other') }];
  const statusCustomerArray = [{ key: 1, text: t('admin') }];
  const cuntry = [{ key: "IL", text: t('male') }];
  // const[listId,setListId]=useState([{}]);

  // const ListId = useSelector((state: any) => {
  //   let obj = JSON.parse(state.auth.user)
  //   let listId = [{ key: "idInitiator", value: obj.data.id_entity },
  //   { key: " idClient", value: obj.data.client.id_entity },
  //   { key: "id_branch", value: obj.data.branch.id_entity }]
  //   return listId;
  // });

  const [customer, setCustomer] = useState(new Customer(''));
  const [createCustomer,setCreateCustomer]=useState("")
  //set state from custem component
  const updateUser = (key: string, value: any) => {
    let newCus = { ...customer };
    (newCus as any)[key] = value;
    setCustomer(newCus);
  }
  let isCreate
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log("customer detail",customer)
   
   isCreate = await CreateCustomer(customer, [{ value: 1 }, { value: 2 }, { value: 2 }])
   console.log(isCreate)
   setCreateCustomer(isCreate)
   
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="sub-header">
        <Title
          title={t("customers")} />
        <div className="divider"></div>
        <PrimaryButton className='button' type="submit" checked={false} text={t('createCustomer')} iconProps={Icons.addFriend} />
        <DefaultButton className='button' checked={false} text={t('editing')} id={'Editing'} iconProps={Icons.editContact} />
        <DefaultButton className='button' checked={false} iconProps={Icons.userRemove} text={t('deletion')} id={'Deletion'} />
        <DefaultButton className='button' checked={false} text={t('save')} id={'Save'} iconProps={Icons.cloudUpload} />
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
      </div>
      <hr className="hr"></hr>
      <div className="content-wrapper customerDetail-wrapper">
        <Subtitle title={t("customerDetails")} />
        <p className="title-text">{createCustomer}</p>
        <p className="title-text">{t('personalDetails')}</p>
        <CustomToggle onText={t('customerLock')} onChange={updateUser} id={'CustomerLock'} defaultChecked={false} offText={t('customerLock')} />
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={customerTypes} label={t('customerType')} onChange={updateUser} selectedKey={customer.CustomerType} id={'CustomerType'} othertextInput={t('')} />
        </div>
        <div></div>
        <div>
          <CustomTextFieldAddInput required={true} label={t('firstName')} onChange={updateUser} id={'FirstName'} iconProps={Icons.add} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />
          <CustomTextField required={true} label={t('lastName')} onChange={updateUser} id={'LastName'} />
          <CustomTextField required={true} label={t('dateOfBirth')} onChange={updateUser} id={'DateOfBirth'} iconProps={Icons.calendar} type="date"/>
          <CustomDropdown otherInputId={'OtherGender'} hasOtherValue={true} options={genders} label={t('gander')} onChange={updateUser} selectedKey={customer.Gender} id={'Gender'} othertextInput={t('other')} />
          <p className="title-text">{t('contactInformation')}</p>
        </div>
        <div>
          <CustomTextField required={true} label={t('identityNumber')} onChange={updateUser} id={'IdentityNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={cuntry} label={t('countryIdentityNumber')} onChange={updateUser} selectedKey={customer.CountryIdentityNumber} id={'CountryIdentityNumber'} othertextInput={t('')} />
          <CustomDropdown otherInputId={'typeIdentityNumberOther'} hasOtherValue={true} options={typeIdentityNumbers} label={t('typeIdentityNumber')} onChange={updateUser} selectedKey={customer.TypeIdentityNumber} id={'TypeIdentityNumber'} othertextInput={t('typeIdentityNumberOther')} />
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

          <p className="title-text">{t('moreDetails')}</p>
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

        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={customerStatus} label={t('customerStatus')} onChange={updateUser} selectedKey={customer.CustomerStatus} id={'CustomerStatus'} othertextInput={t('')} />
          <CustomTextField required={true} label={t('customerNumber')} onChange={updateUser} id={'customerNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={customerStatus} label={t('nameIDEmployee')} onChange={updateUser} selectedKey={customer.NameIDEmployee} id={'NameIDEmployee'} othertextInput={t('')} />
        </div>

        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={genders} label={t('areaOfPracticeOrIndustry')} onChange={updateUser} selectedKey={customer.AreaOfPracticeIndustry} id={'AreaOfPracticeOrIndustry'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={genders} label={t('creditGroup')} onChange={updateUser} selectedKey={customer.CreditGroup} id={'CreditGroup'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={genders} label={t('agent')} onChange={updateUser} selectedKey={customer.Agent} id={'Agent'} othertextInput={t('')} />

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


export default CustomerDetails;





//send to detail customer to save




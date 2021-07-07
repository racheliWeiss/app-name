import  { useState } from "react";
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
import {  useDispatch, useSelector } from "react-redux";
import Title from "../../shared/components/Title";
import {createCustomer} from "../../store/actions/customerActioin"
import { stat } from "fs";



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
  DateBirth: Date;
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
  Address: string;
  HouseNumber: string;
  AddressCity: string
  IDCountryCode: string;
  Telephone: string;
  TelephoneCountryCode: Number;
  Email: string;
  CustomerNumber:string;
  constructor(firstName:string = '', gender: Number = 0, customerStatus: Number = 0, note = '',
    lastName = '', customerLock = false, dateBirth = new Date("2021-2-19"),
    otherGender = '', middleName = '', otherCustomerStatus = '', customerCondition = 0, customerType = 0, viewNoteWhenPerformingAction: boolean = false, areaOfPracticeIndustry: Number = 0, creditGroup = 0, agent = 0,
    typeIdentityNumber = "", typeIdentityNumberOther = '', identityNumber = "", countryIdentityNumber = '', nameIDEmployee = 0, address = '', houseNumber = "", addressCity = '', iDCountryCode = '', telephone = '', telephoneCountryCode = 0, email = '',customerNumber="") {
    this.Gender = gender;
    this.CustomerStatus = customerStatus;
    this.FirstName = firstName;
    this.Note = note;
    this.LastName = lastName;
    this.CustomerLock = customerLock;
    this.DateBirth = dateBirth;
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
    this.Address = address;
    this.HouseNumber = houseNumber;
    this.AddressCity = addressCity;
    this.IDCountryCode = iDCountryCode;
    this.Telephone = telephone
    this.TelephoneCountryCode = telephoneCountryCode;
    this.Email = email;
    this.CustomerNumber = customerNumber
  }
}

const CustomerDetails = () => {
  

  const [t, i18n] = useTranslation();
  const dispatch = useDispatch()

//Get the data in option
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
  
//get data after create object
  
  const value = useSelector((state:any)=>{
    const cus = state.customerReducer.dataCustomer
    return cus
     
  });
   console.log(value)
  //  customer.CustomerCondition = objDate.data.class.class_name
  //  customer.DateOfBirth = objDate.data.properties.date_birth
  //  customer.FirstName = objDate.data.properties.first_name
  //  customer.LastName  = objDate.data.properties.last_name
  //  customer.CustomerLock = objDate.data.properties.is_locked
  //  customer.CustomerStatus = objDate.data.status.class_name
  //  customer.Gander = objDate.data.gander.gender_name
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
  const [update,setUpdate] = useState(true)
  const [isCreateCustomer,setIsCreateCustomer]=useState("")
  //update state customer  from custem component
  const updateUser = (key: string, value: any) => {
    console.log(value)
    let newCus = { ...customer };
    (newCus as any)[key] = value;
    setCustomer(newCus);
    console.log(customer.DateBirth)
  }
  let isCreate 
  const handleSubmit = async (e:any) => {
    const { name, value } = e.target;
    let requestMethod = name;
    console.log("type mathod of form",requestMethod,name)
    e.preventDefault();
    console.log("customer detail",customer)
    isCreate = createCustomer(dispatch ,customer,[{ value: 1 }, { value: 2 }, { value: 2 }] )
    
  // isCreate = await CreateCustomer(customer, [{ value: 1 }, { value: 2 }, { value: 2 }],requestMethod)
   console.log(isCreate)
   if(await isCreate==true){
    setIsCreateCustomer("Customer created successfully")
    setUpdate(!isCreate)
   }
   else{
    setIsCreateCustomer("Customer dont created ")
   }
  

   
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="sub-header">
        <Title
          title={t("customers")} />
        <div className="divider"></div>
        <PrimaryButton className='button' type="submit" checked={false} text={t('createCustomer')} iconProps={Icons.addFriend} name="create"/>
        <DefaultButton className='button' checked={false} text={t('editing')} id={'Editing'} iconProps={Icons.editContact} disabled={update} name="update"  type="submit" />
        <DefaultButton className='button' checked={false} iconProps={Icons.userRemove} text={t('deletion')} id={'Deletion'} name="delete" />
        <DefaultButton className='button' checked={false} text={t('save')} id={'Save'} iconProps={Icons.cloudUpload}/>
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
          <CustomTextFieldAddInput value={customer.FirstName}required={true} label={t('firstName')} onChange={updateUser} id={'FirstName'} iconProps={Icons.add} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />
          <CustomTextField value={customer.LastName} required={true} label={t('lastName')} onChange={updateUser} id={'LastName'} />
          <CustomTextField type="date" required={true} label={t('dateOfBirth')} onChange={updateUser} id={'DateBirth'} iconProps={Icons.calendar} />
          <CustomDropdown otherInputId={'OtherGender'} hasOtherValue={true} options={genders} label={t('gander')} onChange={updateUser} selectedKey={customer.Gender} id={'Gender'} othertextInput={t('other')} />
          <p className="title-text">{t('contactInformation')}</p>
        </div>
        <div>
          <CustomTextField value={customer.IdentityNumber} required={true} label={t('identityNumber')} onChange={updateUser} id={'IdentityNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={cuntry} label={t('countryIdentityNumber')} onChange={updateUser} selectedKey={customer.CountryIdentityNumber} id={'CountryIdentityNumber'} othertextInput={t('')} />
          <CustomDropdown otherInputId={'typeIdentityNumberOther'} hasOtherValue={true} options={typeIdentityNumbers} label={t('typeIdentityNumber')} onChange={updateUser} selectedKey={customer.TypeIdentityNumber} id={'TypeIdentityNumber'} othertextInput={t('typeIdentityNumberOther')} />
        </div>
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>

        <div>
          <p className="title-text">{t('address')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.Address} required={true} label={t('address')} onChange={updateUser} id={'Address'}  />
          <CustomTextField value={customer.HouseNumber} label={t('houseNumber')} onChange={updateUser} id={'HouseNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('city')} onChange={updateUser} selectedKey={customer.AddressCity} id={'AddressCity'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('country')} onChange={updateUser} selectedKey={customer.IDCountryCode} id={'IDCountryCode'} othertextInput={t('')} />

          <p className="title-text">{t('moreDetails')}</p>
        </div>
        <div>
          <p className="title-text">{t('phone')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.Telephone} required={true} label={t('phone')} onChange={updateUser} id={'Telephone'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('countryPhone')} onChange={updateUser} selectedKey={customer.TelephoneCountryCode} id={'TelephoneCountryCode'} othertextInput={t('')} />
          <p className="title-text">{t('email')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.Email} required={true} label={t('emailAddress')} onChange={updateUser} id={'Email'} type='email' />

        </div>

        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={customerStatus} label={t('customerStatus')} onChange={updateUser} selectedKey={customer.CustomerStatus} id={'CustomerStatus'} othertextInput={t('')} />
          <CustomTextField value={customer.CustomerNumber} required={true} label={t('customerNumber')} onChange={updateUser} id={'CustomerNumber'} />
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




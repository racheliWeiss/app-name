import  { useEffect, useState } from "react";
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
import { useBoolean } from '@fluentui/react-hooks';
import { loadOptions } from "../../store/actions/dataActions";



//form's object
export interface ICustomer {
  [x: string]: any;
  Gender: Number;
  OtherGender: String;
  OtherCustomerStatus: string;
  CustomerStatus: Number;
  FirstName: string;
  LastName: string;
  CustomerLock: boolean;
  Note: string;
  DateBirth: string;
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
}




const blankCustomer ={
  Gender: 1,
  CustomerStatus : 1,
  FirstName : "",
  Note : "",
  LastName : "",
  CustomerLock : false,
  DateBirth : "",
  OtherGender : "",
  MiddleName : "",
  OtherCustomerStatus :"",
  CustomerCondition : 1,
  CustomerType : 1,
  ViewNoteWhenPerformingAction : false,
  AreaOfPracticeIndustry : 0,
  CreditGroup : 0,
  Agent : 0,
  TypeIdentityNumber : "",
  IdentityNumber : "",
  TypeIdentityNumberOther : "",
  CountryIdentityNumber : "",
  NameIDEmployee : 0,
  Address : "",
  HouseNumber : "",
  AddressCity : "",
  IDCountryCode : "",
  Telephone : "",
  TelephoneCountryCode : 0,
  Email : "",
  CustomerNumber : "",
}


const CustomerDetails = () => {
  
  
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch()
  // const [customer, setCustomer] = useState(Customer);
  // const [update,setUpdate] = useState(true)

  
  // const [readOnly,setReadOnly] = useState(false)
//Get the data in option
  // const objgenders = useSelector((state: any) => {
  //   let objDate = state.dataReducer.data.genders
  //   let objGender: { key: any; text: any; }[]=[]
  //   objDate.map((obj: any)=>{
  //     objGender.push({key:obj.enum_id,text:obj.enum_value})
  //   })
  //   return objGender;
  // });
  // const objTypeIdentityNumbers = useSelector((state: any) => {
  //   let objDate = state.dataReducer.data.typeIdentityNumber
  //   let objtypeIdentityNumbers: { key: any; text: any; }[]=[]
  //   objDate.map((obj: any)=>{
  //     objtypeIdentityNumbers.push({key:obj.enum_id,text:obj.enum_value})
  //   })
  //   return objtypeIdentityNumbers;
  // });
  // const objCustomerStatus = useSelector((state: any) => {
  //   let objDate = state.dataReducer.data.customerStatus
  //   let objcustomerStatus: { key: any; text: any; }[]=[]
  //   objDate.map((obj: any)=>{
  //     objcustomerStatus.push({key:obj.enum_id,text:obj.enum_value})
  //   })
  //   return objcustomerStatus;
  // });

  // const objCustomerConditions = useSelector((state: any) => {
  //   let objDate = state.dataReducer.data.customerCondition
  //   let objcustomerConditions: { key: any; text: any; }[]=[]
  //   objDate.map((obj: any)=>{
  //     objcustomerConditions.push({key:obj.enum_id,text:obj.enum_value})
  //   })
  //   return objcustomerConditions;
  // });

  // const objCustomerTypes = useSelector((state: any) => {
  //   let objDate = state.dataReducer.data.customerType
  //   let objcustomerTypes: { key: any; text: any; }[]=[]
  //   objDate.map((obj: any)=>{
  //     objcustomerTypes.push({key:obj.enum_id,text:obj.enum_value})
  //   })
  //   return objcustomerTypes;
  // });
  // const genders=objgenders
  // const customerTypes =objCustomerTypes;
  //customer condition is'nt display on page
  // const customerConditions = objCustomerConditions;
  // const customerStatus=objCustomerStatus;
  // const typeIdentityNumbers = objTypeIdentityNumbers
  // const genderArray = [{ key: 1, text: t('male') }, { key: 2, text: t('female') }, { key: 3, text: t('other') }];
  // const statusCustomerArray = [{ key: 1, text: t('admin') }];
  // const cuntry = [{ key: "IL", text: t('male') }];

  
  
//get data after create object
  // const value = useSelector((state:any)=>{
  //   const objDate = state.customerReducer.dataCustomer
  //   return objDate
     
  // });

    const [customer, setCustomer] = useState(blankCustomer)
    const [fieldsOptionsMap,setFieldsOptionsMap]=useState(null)
    const {dataCustomer}  = useSelector(({customerReducer}: any)=> customerReducer)
    const fieldsOptionsMapFromReducer = useSelector(({dataReducer}: any))


    const callLoadOptions = async ()=> {
      try {
        await dispatch(loadOptions())
    
      } catch (error) {
        
      }
    }

    useEffect(()=> {

    }, [fieldsOptionsMapFromReducer])

    useEffect(()=> console.log('CustomerDetails created!'), [])
    useEffect(()=>{
      console.log('dataCustomer: ', dataCustomer)
      if(!dataCustomer?.data) return

      setCustomer({
        ...customer,
        CustomerCondition : dataCustomer.class.class_name,
         DateBirth : dataCustomer.properties.date_birth,
          FirstName : dataCustomer.properties.first_name,
          CustomerLock : dataCustomer.properties.is_locked,
           Gender : dataCustomer.gander.gender_name,
      })
    },[dataCustomer])

    


    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      //TODO: fill the entire function
    }
  
     const updateCustomer = (key: string, value: any) => {
    setCustomer({
      ...customer,
      [key]: value
    });
  }

  
    
    const objectValue = [{key:1,text:"gyefeq"},{key:2,text:"fvh"}]
      
    
  // const getValue = () =>{
  //   if(value){
  //     setReadOnly(true);
  //     customer.CustomerCondition = value.class.class_name
  //     customer.DateOfBirth = value.properties.date_birth
  //     customer.FirstName = value.properties.first_name
  //     customer.LastName  = value.properties.last_name
  //     customer.CustomerLock = value.properties.is_locked
  //     customer.CustomerStatus = value.status.class_name
  //     customer.Gander = value.gander.gender_name
  //   }
   
  //  }

  // if(value){
  //   getValue();
  // }


  // const[listId,setListId]=useState([{}]);
  // const ListId = useSelector((state: any) => {
  //   let obj = JSON.parse(state.auth.user)
  //   let listId = [{ key: "idInitiator", value: obj.data.id_entity },
  //   { key: " idClient", value: obj.data.client.id_entity },
  //   { key: "id_branch", value: obj.data.branch.id_entity }]
  //   return listId;
  // });

 
  
  //update state customer  from custem component
  // const updateUser = (key: string, value: any) => {
  //   console.log(value)
  //   let newCus = { ...customer };
  //   (newCus as any)[key] = value;
  //   setCustomer(newCus);
  //   console.log("customer.DateBirth",(customer.DateBirth))
  // }
  // let isCreate 
  // const handleSubmit = async (e:any) => {
  //   const { name, value } = e.target;
  //   let requestMethod = name;
  //   console.log("type mathod of form",requestMethod,name)
  //   e.preventDefault();
  //   console.log("customer detail",customer)
  //   isCreate = createCustomer(dispatch ,customer,[{ value: 1 }, { value: 2 }, { value: 2 }] )
    
  // // isCreate = await CreateCustomer(customer, [{ value: 1 }, { value: 2 }, { value: 2 }],requestMethod)
  //  console.log(isCreate)
  //  if(await isCreate==true){
   
  //   setUpdate(!isCreate)
  //  }
  //  else{
    
  //  }
  

   
  // }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="sub-header">
        <Title
          title={t("customers")} />
        <div className="divider"></div>
        <PrimaryButton className='button' type="submit" checked={false} text={t('createCustomer')} iconProps={Icons.addFriend} name="create"/>
        <DefaultButton className='button edit-button' checked={false} text={t('editing')}  iconProps={Icons.editContact} disabled={false} name="update"  type="submit" />
        <DefaultButton className='button delete-button' checked={false} iconProps={Icons.userRemove} text={t('deletion')} id={'Deletion'} name="delete" />
        <DefaultButton className='button save-upload' checked={false} text={t('save')} iconProps={Icons.cloudUpload}/>
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
        <p className="title-text"></p>
        <p className="title-text">{t('personalDetails')}</p>
        <CustomToggle onText={t('customerLock')} onChange={updateCustomer} id={'CustomerLock'} defaultChecked={customer.CustomerLock} offText={t('customerLock')} />
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={objectValue} label={t('customerType')} onChange={updateCustomer} selectedKey={customer.CustomerType} id={'CustomerType'} othertextInput={t('')} />
        </div>
        <div></div>
        <div>
          <CustomTextFieldAddInput value={customer.FirstName} required={true} label={t('firstName')} onChange={updateCustomer} id={'FirstName'} iconProps={Icons.add} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />
          <CustomTextField value={customer.LastName} required={true} label={t('lastName')} onChange={updateCustomer} id={'LastName'} />
          <CustomTextField value={customer.DateBirth} type="date" required={true} label={t('dateOfBirth')} onChange={updateCustomer} id={'DateBirth'} iconProps={Icons.calendar} />
          <CustomDropdown otherInputId={'OtherGender'} hasOtherValue={true} options={[]} label={t('gander')} onChange={updateCustomer} selectedKey={customer.Gender} id={'Gender'} othertextInput={t('other')} />
          <p className="title-text">{t('contactInformation')}</p>
        </div>
        <div>
          <CustomTextField value={customer.IdentityNumber} required={true} label={t('identityNumber')} onChange={updateCustomer} id={'IdentityNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('countryIdentityNumber')} onChange={updateCustomer} selectedKey={customer.CountryIdentityNumber} id={'CountryIdentityNumber'} othertextInput={t('')} />
          <CustomDropdown otherInputId={'typeIdentityNumberOther'} hasOtherValue={true} options={[]} label={t('typeIdentityNumber')} onChange={updateCustomer} selectedKey={customer.TypeIdentityNumber} id={'TypeIdentityNumber'} othertextInput={t('typeIdentityNumberOther')} />
        </div>
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>

        <div>
          <p className="title-text">{t('address')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.Address} required={true} label={t('address')} onChange={updateCustomer} id={'Address'}  />
          <CustomTextField value={customer.HouseNumber} label={t('houseNumber')} onChange={updateCustomer} id={'HouseNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('city')} onChange={updateCustomer} selectedKey={customer.AddressCity} id={'AddressCity'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('country')} onChange={updateCustomer} selectedKey={customer.IDCountryCode} id={'IDCountryCode'} othertextInput={t('')} />

          <p className="title-text">{t('moreDetails')}</p>
        </div>
        <div>
          <p className="title-text">{t('phone')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.Telephone} required={true} label={t('phone')} onChange={updateCustomer} id={'Telephone'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('countryPhone')} onChange={updateCustomer} selectedKey={customer.TelephoneCountryCode} id={'TelephoneCountryCode'} othertextInput={t('')} />
          <p className="title-text">{t('email')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.Email} required={true} label={t('emailAddress')} onChange={updateCustomer} id={'Email'} type='email' />

        </div>

        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('customerStatus')} onChange={updateCustomer} selectedKey={customer.CustomerStatus} id={'CustomerStatus'} othertextInput={t('')} />
          <CustomTextField value={customer.CustomerNumber} required={true} label={t('customerNumber')} onChange={updateCustomer} id={'CustomerNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('nameIDEmployee')} onChange={updateCustomer} selectedKey={customer.NameIDEmployee} id={'NameIDEmployee'} othertextInput={t('')} />
        </div>

        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('areaOfPracticeOrIndustry')} onChange={updateCustomer} selectedKey={customer.AreaOfPracticeIndustry} id={'AreaOfPracticeOrIndustry'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('creditGroup')} onChange={updateCustomer} selectedKey={customer.CreditGroup} id={'CreditGroup'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('agent')} onChange={updateCustomer} selectedKey={customer.Agent} id={'Agent'} othertextInput={t('')} />

        </div>
        <p className="title-text">{t('note')}</p>
        <div>
          <p></p>
          <CustomToggle onText={t('viewNoteWhenPerformingAction')} onChange={updateCustomer} id={'ViewNoteWhenPerformingAnAction'} defaultChecked={true} offText={t('viewNoteWhenPerformingAction')} />
        </div>
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
      </div>
      <TextFeildNote label={t('')} onChange={updateCustomer} id={'Note'} />
    </form>
  );
}


export default CustomerDetails;





//send to detail customer to save




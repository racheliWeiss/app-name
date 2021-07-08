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
  gender: 1,
  CustomerStatus : 1,
  entityStatusId : 0,
  firstName : "",
  note : "",
  lastName : "",
  isLocked : false,
  dateBirth : "",
  genderOther : "",
  middleName : "",
  otherCustomerStatus :"",
  classId : 1,
  entitySubTypeId : 1,
  ViewNoteWhenPerformingAction : false,
  industryId : 0,
  CreditGroup : 0,
  idAffiliate : 0,
  idTypeId : "",
  idNumber : "",
  idTypeOther : "",
  addressCountryCode : "",
  idIdentifier : 0,
  address : "",
  HouseNumber : "",
  addressCity : "",
  iDCountryCode : "",
  telephone : "",
  telephoneCountryCode : 0,
  email : "",
  entityNumber : "",
  
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
    const fieldsOptionsMapFromReducer = useSelector(({dataReducer}:any)=>dataReducer)
    const options = {
     genders : [],
    typeIdentityNumbers:[],
    customersStatus : [],
    customersCondition : [],
    customersType : []
   }
    const callLoadOptions = async ()=> {
      try {
        await dispatch(loadOptions())
        console.log("good")
    
      } catch (error) {
        
      }
    }

    const buildObjecOptions = (nameOption:any) =>{
      fieldsOptionsMapFromReducer.dataCustomer.data.generalFormOptionsMap[nameOption].map((objOptin: { key: string | number; })=>
        //@ts-ignore
        options[nameOption][objOptin.key]  = {key:objOptin[enum_id], text:objOptin[enum_value]}
      )
      //@ts-ignore
      // console.log("options[nameOption]",options[nameOption])
    }
    useEffect(()=> {
       if(!fieldsOptionsMapFromReducer?.data?.generalFormOptionsMap) return 
       const data = JSON.stringify(fieldsOptionsMapFromReducer.data.generalFormOptionsMap);
          const objOptions = JSON.parse(data);
          console.log("data option",objOptions);
          objOptions.map =((element: any)=>{
              console.log("element option",element);
          });
      //  console.log("dataCustomer?.data?.generalFormOptionsMap",fieldsOptionsMapFromReducer.data.generalFormOptionsMap
      //  Array.prototype.forEach.call(fieldsOptionsMapFromReducer.data.generalFormOptionsMap, objOption => {
      //   console.log(objOption)
      // }); 
      //         const objOptions =fieldsOptionsMapFromReducer.data.generalFormOptionsMap
      //  [...objOptions].forEeach(({key}:any)=>{
      //     if(fieldsOptionsMapFromReducer.data.generalFormOptionsMap.key!==null)
      //     console.log(key in options ,key)
      //     buildObjecOptions(key) 
      //  })
    }, [fieldsOptionsMapFromReducer])
   

    useEffect(()=>{
      console.log('CustomerDetails created!')
      callLoadOptions()
    } , [])

    useEffect(()=>{
      console.log('dataCustomer: ', dataCustomer)
      if(!dataCustomer?.data) return

      setCustomer({
        ...customer,
        classId : dataCustomer.class.class_name,
        dateBirth : dataCustomer.properties.date_birth,
        firstName : dataCustomer.properties.first_name,
        lastName :dataCustomer.properties.last_name,

        isLocked : dataCustomer.properties.is_locked,
        gender : dataCustomer.gander.gender_name,

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
        <CustomToggle onText={t('customerLock')} onChange={updateCustomer} id={'isLocked'} defaultChecked={customer.isLocked} offText={t('customerLock')} />
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={objectValue} label={t('customerType')} onChange={updateCustomer} selectedKey={customer.entitySubTypeId} id={'entitySubTypeId'} othertextInput={t('')} />
        </div>
        <div></div>
        <div>
          <CustomTextFieldAddInput value={customer.firstName} required={true} label={t('firstName')} onChange={updateCustomer} id={'firstName'} iconProps={Icons.add} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />
          <CustomTextField value={customer.lastName} required={true} label={t('lastName')} onChange={updateCustomer} id={'lastName'} />
          <CustomTextField value={customer.dateBirth} type="date" required={true} label={t('dateOfBirth')} onChange={updateCustomer} id={'dateBirth'} iconProps={Icons.calendar} />
          <CustomDropdown otherInputId={'OtherGender'} hasOtherValue={true} options={[]} label={t('gander')} onChange={updateCustomer} selectedKey={customer.gender} id={'gender'} othertextInput={t('other')} />
          <p className="title-text">{t('contactInformation')}</p>
        </div>
        <div>
          <CustomTextField value={customer.idNumber} required={true} label={t('identityNumber')} onChange={updateCustomer} id={'idNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('countryIdentityNumber')} onChange={updateCustomer} selectedKey={customer.iDCountryCode} id={'iDCountryCode'} othertextInput={t('')} />
          <CustomDropdown otherInputId={'typeIdentityNumberOther'} hasOtherValue={true} options={[]} label={t('typeIdentityNumber')} onChange={updateCustomer} selectedKey={customer.idTypeId} id={'TypeIdentityNumber'} othertextInput={t('typeIdentityNumberOther')} />
        </div>
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>

        <div>
          <p className="title-text">{t('address')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.address} required={true} label={t('address')} onChange={updateCustomer} id={'Address'}  />
          <CustomTextField value={customer.HouseNumber} label={t('houseNumber')} onChange={updateCustomer} id={'HouseNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('city')} onChange={updateCustomer} selectedKey={customer.addressCity} id={'AddressCity'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('country')} onChange={updateCustomer} selectedKey={customer.addressCountryCode} id={'addressCountryCode'} othertextInput={t('')} />

          <p className="title-text">{t('moreDetails')}</p>
        </div>
        <div>
          <p className="title-text">{t('phone')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.telephone} required={true} label={t('phone')} onChange={updateCustomer} id={'telephone'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('countryPhone')} onChange={updateCustomer} selectedKey={customer.telephoneCountryCode} id={'TelephoneCountryCode'} othertextInput={t('')} />
          <p className="title-text">{t('email')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.email} required={true} label={t('emailAddress')} onChange={updateCustomer} id={'email'} type='email' />

        </div>

        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('customerStatus')} onChange={updateCustomer} selectedKey={customer.CustomerStatus} id={'CustomerStatus'} othertextInput={t('')} />
          <CustomTextField value={customer.entityNumber} required={true} label={t('customerNumber')} onChange={updateCustomer} id={'entityNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('nameIDEmployee')} onChange={updateCustomer} selectedKey={customer.idIdentifier} id={'idIdentifier'} othertextInput={t('')} />
        </div>

        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('areaOfPracticeOrIndustry')} onChange={updateCustomer} selectedKey={customer.industryId} id={'industryId'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('creditGroup')} onChange={updateCustomer} selectedKey={customer.CreditGroup} id={'CreditGroup'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('agent')} onChange={updateCustomer} selectedKey={customer.idAffiliate} id={'idAffiliate'} othertextInput={t('')} />

        </div>
        <p className="title-text">{t('note')}</p>
        <div>
          <p></p>
          <CustomToggle onText={t('viewNoteWhenPerformingAction')} onChange={updateCustomer} id={'ViewNoteWhenPerformingAnAction'} defaultChecked={true} offText={t('viewNoteWhenPerformingAction')} />
        </div>
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
      </div>
      <TextFeildNote label={t('')} onChange={updateCustomer} id={'note'} />
    </form>
  );
}


export default CustomerDetails;





//send to detail customer to save




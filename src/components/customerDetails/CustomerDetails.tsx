import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { CustomDropdown } from "../../shared/components/Option";
import { CustomTextField, CustomTextFieldAddInput } from "../../shared/components/TextField";
import { TextFeildNote } from "../../shared/components/Note";
import { CustomToggle } from "../../shared/components/Toggle";
import './customerDetails.scss'
import { Icons } from "../../modelsType/Icon";
import Subtitle from "../../shared/components/Subtitle";
import '../../scssPages/sub-header.scss';
import {DefaultButton, IconButton, PrimaryButton } from "@fluentui/react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../shared/components/Title";
import { createCustomer, readCustomerId } from "../../store/actions/customerActioin"
import { loadOptions } from "../../store/actions/dataActions";
import { useLocation, useParams } from "react-router-dom";





//form's object
export interface ICustomer {
  [x: string]: any;
  gender: Number;
  otherGender: String;
  otherCustomerStatus: string;
  entityStatusId: Number;
  firstName: string;
  lastName: string;
  isLocked: boolean;
  note: string;
  dateBirth: string;
  middleName: string;
  classId: Number;
  entitySubTypeId: Number;
  ViewNoteWhenPerformingAction: boolean;
  industryId: Number;
  CreditGroup: Number;
  idAffiliate: Number;
  idNumber: string;
  idTypeId: string;
  idTypeOther: string;
  addressCountryCode: string;
  idIdentifier: Number;
  address: string;
  addressNumber: string;
  addressCity: string
  iDCountryCode: string;
  telephone: string;
  telephoneCountryCode: Number;
  email: string;
  entityNumber: string;
}

const blankCustomer: ICustomer = {
  gender: 1,
  otherGender: "",
  entityStatusId: 0,
  firstName: "",
  note: "",
  lastName: "",
  isLocked: false,
  dateBirth: "",
  genderOther: "",
  middleName: "",
  otherCustomerStatus: "",
  classId: 1,
  entitySubTypeId: 1,
  ViewNoteWhenPerformingAction: false,
  industryId: 0,
  CreditGroup: 0,
  idAffiliate: 0,
  idTypeId: "",
  idNumber: "",
  idTypeOther: "",
  addressCountryCode: "",
  idIdentifier: 0,
  address: "",
  addressNumber: "",
  addressCity: "",
  iDCountryCode: "",
  telephone: "",
  telephoneCountryCode: 0,
  email: "",
  entityNumber: "",
}



interface Iparms {
  userId?: string,
  state?: string,
}

export interface IUserCredentials {
  "idInitiator": string,
  "idClient": string,
  "idBranch": string,
}
const CustomerDetails = () => {

  const options = {
    genders: [],
    typeIdentityNumbers: [],
    customersStatus: [],
    customersCondition: [],
    customersType: []
  }

  const [t, i18n] = useTranslation();
  const dispatch = useDispatch()
  const [readOnly, setReadOnly] = useState(false)
  const [update, setUpdate] = useState(true)
  const [typeButton, setTypeButton] = useState<string|null>()
  const [customer, setCustomer] = useState<ICustomer>(blankCustomer)
  const [optionsForm, setOptionsForm] = useState(options)
  // const [fieldsOptionsMap,setFieldsOptionsMap]=useState(null)
  const [msgIsCreated, setMsgIsCreated] = useState("")
  const { dataCustomer } = useSelector(({ customerReducer }: any) => customerReducer)
  const fieldsOptionsMapFromReducer = useSelector(({ dataReducer }: any) => dataReducer)
  const [userCredentials, setUserCredentials] = useState<IUserCredentials|null>(null)
  const authReducer = useSelector(({ authReducer }: any) => authReducer)
  const params = useParams<Iparms>()
  const { state } = useLocation<string>();

  //details of user login
  useEffect(() => {
    if (!authReducer?.data?.user) return
    console.log("userObj: ", "idInitiator", authReducer.data.user.id_entity,
      "idClient", authReducer.data.client.id_entity,
      "idBranch: ", authReducer.data.branch.id_entity);

    setUserCredentials({
      "idInitiator": authReducer.data.user.id_entity,
      "idClient": authReducer.data.client.id_entity,
      "idBranch": authReducer.data.branch.id_entity
    })
    console.log("UserCredentials : ", userCredentials)
  }, [authReducer]);

  //id of customer from search customer
  useEffect(() => {
    console.log("params state : ", state);
    if (!state) {
      setCustomer(blankCustomer);
    }
    // if (params?.userId) {
    //     const userId = params.userId
    //     callReadCustomer(userId, userCredentials)
    //     console.log("params : ",params)
    // // }

    if (state) {
      const userId = state
      callReadCustomer(userId, userCredentials)
      console.log("state : ", state)
    }
  }, [state])

  //call to all detail ofuser id from customer search
  const callReadCustomer = async (userId: string, listIdUser: any) => {
    dispatch(readCustomerId(userId, listIdUser))
  }

  //call to option in dropDwan  modify to index db and laoding project
  useEffect(() => {
    if (!fieldsOptionsMapFromReducer?.data?.generalFormOptionsMa) {
      callLoadOptions()
    }
  }, [])

  const callLoadOptions = async () => {
    try {
      await dispatch(loadOptions())
      console.log("good")

    } catch (error) {
      console.log("error in call load options", error)
    }
  }

  //build the option in dropdwan
  const buildObjecOptions = (nameOption: string) => {
    fieldsOptionsMapFromReducer.data.generalFormOptionsMap[nameOption].map((objOptin: { key: string | number; }, index: string | number) => {
      //@ts-ignore
      options[nameOption][index] = { key: objOptin.enum_id, text: objOptin.enum_value }
    });
  }

  //update the object in  option 
  useEffect(() => {
    if (!fieldsOptionsMapFromReducer?.data?.generalFormOptionsMap) return
    const nameOptions = ["customersCondition", "customersType", "genders", "typeIdentityNumbers", "customersStatus"]
    for (let value of nameOptions) {
      buildObjecOptions(value)
    }
    console.log("option customer before state", options)
    setOptionsForm({ ...options })
  }, [fieldsOptionsMapFromReducer])





  //function show to client if  customer created 
  useEffect(() => {

    if (dataCustomer?.err_code === 0) {
      setUpdate(false)
      console.log("typeButton", typeButton)
      setMsgIsCreated("Customer created successfully")
      if (typeButton === "create") {
        setMsgIsCreated("Customer created successfully")
        setReadOnly(true);
      }
      else {
        if (dataCustomer?.err_code) {
          if (dataCustomer.err_code !== 0)
            setMsgIsCreated("The customer's details are incorrect  try again")
        }
        else {
          setMsgIsCreated("")
        }
      }
    }
    if (!dataCustomer?.data) return
    if (dataCustomer?.data?.emails) {
      setCustomer({
        ...customer,
        classId: dataCustomer.data.class.class_id,
        dateBirth: dataCustomer.data.properties.date_birth,
        firstName: dataCustomer.data.properties.first_name,
        lastName: dataCustomer.data.properties.last_name,
        entitySubTypeId: dataCustomer.data.types.entity_sub_type_id,
        isLocked: dataCustomer.data.properties.is_locked,
        note: dataCustomer.data.properties.note,
        gender: dataCustomer.data.gender.gender_id,
        entityStatusId: dataCustomer.data.status.status_id,
        // address: dataCustomer.data.addresses.address_name,
        telephone: dataCustomer.data.telephones.telephone_number,
        email: dataCustomer.data.emails.email_address,
        entityNumber: dataCustomer.data.id_entity
      })

      setReadOnly(true)
    }


    console.log("customer update : ", customer)
  }, [dataCustomer])


  //check what event in button
  const activeButton = (e:any) => {
     const {name}:any = e.target;
   console.log("e.target : ",name)
    setTypeButton(name)
    console.log("blankCustomer : ",blankCustomer)
    setCustomer(blankCustomer)
    if (name === "create") {
      setReadOnly(false)
      setUpdate(true)
      console.log("TypeButton :",typeButton)
    }
    if (name === "update") {
      setReadOnly(false)

    }
  }
   
  //button create customer
  const createButton=()=>{
    setCustomer(blankCustomer)
    setTypeButton("create")
    setReadOnly(false)
    setUpdate(true)
    console.log("TypeButton :",typeButton)
  }
  
  //button to update customer
  const updateButton = ()=>{
    setReadOnly(false)
  }
  //send the update on customer
  const handleSubmit = (e:any) => {
    const {name} = e?.name;
    setTypeButton(name)
    const requestMethod = typeButton;
    e.preventDefault()
    console.log("listIdUser : ", userCredentials)
    if (userCredentials) {
      dispatch(createCustomer(customer, userCredentials))
    }

    //TODO: fill the entire function
  }

  //update sate customer in form
  const updateCustomer = (key: string, value: any) => {
    setCustomer({
      ...customer,
      [key]: value
    });
  }



  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="sub-header">
        <Title
          title={t("customers")} />
        <div className="divider"></div>
        // {/* <button name="root" onClick={(e)=>activeButton(e)} >נכגחאו</button> */}
        <PrimaryButton ariaDescription="create" className='button'  allowDisabledFocus onClick={createButton} checked={false}  name="create" text={t('createCustomer')}iconProps={Icons.addFriend}/>
        <DefaultButton className='button edit-button' onClick={updateButton} checked={false} text={t('editing')} iconProps={Icons.editContact} disabled={update} name="update" />
        <DefaultButton className='button delete-button' checked={false} iconProps={Icons.userRemove} text={t('deletion')} id={'Deletion'} name="delete" />
        <DefaultButton className='button save-upload' type="submit" checked={false} text={t('save')} iconProps={Icons.cloudUpload} />
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
        <p className="title-text">{msgIsCreated}</p>
        <p className="title-text">{t('personalDetails')}</p>
        <CustomToggle onText={t('customerLock')} onChange={updateCustomer} id={'isLocked'} defaultChecked={customer.isLocked} offText={t('customerLock')} />
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={optionsForm.customersType} label={t('customerType')} onChange={updateCustomer} selectedKey={customer.entitySubTypeId} id={'entitySubTypeId'} othertextInput={t('')} />
        </div>
        <div></div>
        <div>
          <CustomTextFieldAddInput value={customer.firstName} required={true} label={t('firstName')} onChange={updateCustomer} id={'firstName'} iconProps={Icons.add} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />
          <CustomTextField value={customer.lastName} required={true} label={t('lastName')} onChange={updateCustomer} id={'lastName'} />
          <CustomTextField value={customer.dateBirth} type="date" required={true} label={t('dateOfBirth')} onChange={updateCustomer} id={'dateBirth'} iconProps={Icons.calendar} />
          <CustomDropdown otherInputId={'OtherGender'} hasOtherValue={true} options={optionsForm.genders} label={t('gander')} onChange={updateCustomer} selectedKey={customer.gender} id={'gender'} othertextInput={t('other')} />
          <p className="title-text">{t('contactInformation')}</p>
        </div>
        <div>
          <CustomTextField value={customer.idNumber} required={true} label={t('identityNumber')} onChange={updateCustomer} id={'idNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('countryIdentityNumber')} onChange={updateCustomer} selectedKey={customer.iDCountryCode} id={'iDCountryCode'} othertextInput={t('')} />
          <CustomDropdown otherInputId={'idTypeOther'} hasOtherValue={true} options={optionsForm.typeIdentityNumbers} label={t('typeIdentityNumber')} onChange={updateCustomer} selectedKey={customer.idTypeId} id={'idTypeId'} othertextInput={t('typeIdentityNumberOther')} />
        </div>
        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>

        <div>
          <p className="title-text">{t('address')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.address} readOnly={readOnly} required={true} label={t('address')} onChange={updateCustomer} id={'address'} />
          <CustomTextField value={customer.addressNumber} readOnly={readOnly} label={t('houseNumber')} onChange={updateCustomer} id={'addressNumber'} />
          <CustomDropdown readOnly={readOnly} otherInputId={''} hasOtherValue={false} options={[]} label={t('city')} onChange={updateCustomer} selectedKey={customer.addressCity} id={'addressCity'} othertextInput={t('')} />
          <CustomDropdown readOnly={readOnly} otherInputId={''} hasOtherValue={false} options={[]} label={t('country')} onChange={updateCustomer} selectedKey={customer.addressCountryCode} id={'addressCountryCode'} othertextInput={t('')} />

          <p className="title-text">{t('moreDetails')}</p>
        </div>
        <div>
          <p className="title-text">{t('phone')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField readOnly={readOnly} value={customer.telephone} required={true} label={t('phone')} onChange={updateCustomer} id={'telephone'} />
          <CustomDropdown readOnly={readOnly} otherInputId={''} hasOtherValue={false} options={[]} label={t('countryPhone')} onChange={updateCustomer} selectedKey={customer.telephoneCountryCode} id={'telephoneCountryCode'} othertextInput={t('')} />
          <p className="title-text">{t('email')}</p>
          <hr className="hr text-width"></hr>
          <CustomTextField value={customer.email} readOnly={readOnly} required={true} label={t('emailAddress')} onChange={updateCustomer} id={'email'} type='email' />

        </div>

        <hr className="hr"></hr>
        <hr className="hr text-width"></hr>
        <div>
          <CustomDropdown otherInputId={''} readOnly={readOnly} hasOtherValue={false} options={optionsForm.customersStatus} label={t('customerStatus')} onChange={updateCustomer} selectedKey={customer.entityStatusId} id={'entityStatusId'} othertextInput={t('')} />
          <CustomTextField value={customer.entityNumber} readOnly={readOnly} label={t('customerNumber')} onChange={updateCustomer} id={'entityNumber'} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={[]} label={t('nameIDEmployee')} onChange={updateCustomer} selectedKey={customer.idIdentifier} id={'idIdentifier'} othertextInput={t('')} />
        </div>

        <div>
          <CustomDropdown otherInputId={''} readOnly={readOnly} hasOtherValue={false} options={[]} label={t('areaOfPracticeOrIndustry')} onChange={updateCustomer} selectedKey={customer.industryId} id={'industryId'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} readOnly={readOnly} hasOtherValue={false} options={[]} label={t('creditGroup')} onChange={updateCustomer} selectedKey={customer.CreditGroup} id={'CreditGroup'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} readOnly={readOnly} hasOtherValue={false} options={[]} label={t('agent')} onChange={updateCustomer} selectedKey={customer.idAffiliate} id={'idAffiliate'} othertextInput={t('')} />

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




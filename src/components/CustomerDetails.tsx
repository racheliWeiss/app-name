import React, { useEffect, useState } from "react";
import '../scss/form.scss';
import Subheading from "../shared/components/Subtitle";
import { useTranslation } from 'react-i18next';
import { Calendar, DefaultButton, DropdownMenuItemType, IContextualMenuItem, IContextualMenuProps, ITextFieldStyles, PrimaryButton, TextField } from "@fluentui/react";
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
  TypeIdentityNumber:Number;
  TypeIdentityNumberOther:string;
  constructor(firstName: string = '', gender: Number = 0, customerStatus: string = '', note = '',
    lastName = '', customerLock = false, dateOfBirth = new Date("2021-2-19"),
    otherGender = '', middleName = '', otherCustomerStatus = '', customerCondition = 0, customerType = 0, viewNoteWhenPerformingAction: boolean = false, areaOfPracticeIndustry: Number = 0, creditGroup = 0, agent = 0,
    typeIdentityNumber=0,typeIdentityNumberOther='') {
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
    this.TypeIdentityNumber=typeIdentityNumber
    this.TypeIdentityNumberOther=typeIdentityNumberOther
  }
}

//varible icon
const addIcon: IIconProps = { iconName: 'Add' };
const addFriend: IIconProps = { iconName: 'AddFriend' }
const editContact: IIconProps = { iconName: 'EditContact' }
const UserRemove: IIconProps = { iconName: 'UserRemove' }



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
        {/* <div className="sub-header-buttom"> */}
        {/* // </div>ow"><div className="sub-header-buttom d-flex flex-row"> */}
        <PrimaryButton className='button' checked={false} text={t('createCustomer')} onClick={_alertClicked} iconProps={addFriend} />
        <DefaultButton className='button' checked={false} text={t('editing')} id={'Editing'} onClick={_alertClicked} iconProps={editContact} />
        <DefaultButton className='button' checked={false} iconProps={UserRemove} text={t('deletion')} id={'Deletion'} onClick={_alertClicked} />
        <DefaultButton className='button' checked={false} text={t('save')} id={'Save'} onClick={_alertClicked} />
        {/* </div> */}
        {/* </div> */}
      </div>

      <div className="content-wrapper">



        <Subtitle title={t("customerDetails")} />
        <div></div>
        <p className="title-text">{t('personalDetails')}</p>
        <CustomToggle onText={t('customerLock')} onChange={updateUser} id={'CustomerLock'} defaultChecked={true} />
        <hr className="hr"></hr>
          <hr className="hr"></hr>
        <div>
        <CustomDropdown otherInputId={'othercustomerCondition'} hasOtherValue={true} options={statusCustomerArray} label={t('customerCondition')} onChange={updateUser} selectedKey={customer.CustomerCondition} id={'CustomerCondition'} othertextInput={t('othercustomerCondition')} />
        </div>
       
        <div>
        <CustomDropdown otherInputId={''} hasOtherValue={false} options={statusCustomerArray} label={t('customerStatus')} onChange={updateUser} selectedKey={customer.CustomerStatus} id={'CustomerStatus'} othertextInput={t('')} />
   
        <CustomDropdown otherInputId={''} hasOtherValue={false} options={statusCustomerArray} label={t('customerType')} onChange={updateUser} selectedKey={customer.CustomerType} id={'CustomerType'} othertextInput={t('')} />
        {/* </Stack> */}
        </div>
        <hr ></hr>
        <hr ></hr>
        {/* <Stack styles={stackStyles} > */}
        {/* <Stack styles={stackStyles}> */}
        <div>
          <CustomTextFieldAddInput required={true} label={t('firstName')} onChange={updateUser} id={'FirstName'} iconProps={addIcon} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />
         
          <CustomTextField required={true} label={t('lastName')} onChange={updateUser} id={'LastName'} />
          <CustomTextField required={true} label={t('dateOfBirth')} onChange={updateUser} id={'DateOfBirth'} />

          <CustomDropdown otherInputId={'OtherGender'} hasOtherValue={true} options={genderArray} label={t('gander')} onChange={updateUser} selectedKey={customer.Gender} id={'Gender'} othertextInput={t('other')} />
          <p className="title-text">{t("identityDetails")}</p>
          </div>
          <div>
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('areaOfPracticeOrIndustry')} onChange={updateUser} selectedKey={customer.AreaOfPracticeIndustry} id={'AreaOfPracticeOrIndustry'} othertextInput={t('')} />
        
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('creditGroup')} onChange={updateUser} selectedKey={customer.CreditGroup} id={'CreditGroup'} othertextInput={t('')} />
          <CustomDropdown otherInputId={''} hasOtherValue={false} options={genderArray} label={t('agent')} onChange={updateUser} selectedKey={customer.Agent} id={'Agent'} othertextInput={t('')} />
         
          </div>
         
        
          <hr></hr>
          <hr></hr>
          <div>
          
          <CustomTextField required={true} label={t('idNumber')} onChange={updateUser} id={'customerNumber'} />
          <CustomDropdown otherInputId={'typeIdentityNumberOther'} hasOtherValue={false} options={genderArray} label={t('typeIdentityNumber')} onChange={updateUser} selectedKey={customer.TypeIdentityNumber} id={'TypeIdentityNumberOther'} othertextInput={t('typeIdentityNumberOther')} />

          </div>
          <div>
          <CustomTextField required={true} label={t('customerNumber')} onChange={updateUser} id={'customerNumber'} />
         
          {/* <TextFeildNote label={t('note')} onChange={updateUser} id={'Note'} /> */}
          <CustomToggle onText={t('viewNoteWhenPerformingAction')} onChange={updateUser} id={'ViewNoteWhenPerformingAnAction'} defaultChecked={true} />
          </div>
          {/* </Stack> */}

          {/* 


        {/* </Stack> */}
        </div>
     
   

     </>
  );
}



function _alertClicked(): void {
        alert('Clicked');
}



export default CustomerDetails;



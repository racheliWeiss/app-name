import React, { useEffect, useState } from "react";
import '../scss/form.scss';
import Subheading from "../shared/components/Subheading";
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
import Heading from "../shared/components/Heading";



class Customer {
  Gender: Number;
  OtherGender: String;
  OtherCustomerStatus: string;
  StatusCustomer: string;
  FirstName: string;
  LastName: string;
  CustomerLock: boolean;
  Note: string;
  DateOfBirth: Date;
  MiddleName: string;
  CustomerCondition: Number;
  CustomerType: Number;
  constructor(firstName: string = '', gender: Number = 0, statusCustomer: string = '', note = '',
    lastName = '', customerLock = false, dateOfBirth = new Date("2021-2-19"),
    otherGender = '', middleName = '', otherCustomerStatus = '', customerCondition = 0, customerType = 0) {
    this.Gender = gender;
    this.StatusCustomer = statusCustomer;
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
  const stackStyles: Partial<IStackStyles> = { root: { width: 282, height: 32 } };
  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
  };
  const ButtomStyle: Partial<IStackStyles> = { root: { width: 120, height: 35 } };

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

<div className="from">

  
  
    <Heading
      title={t("customers")} />
    {/* <div className="sub-header-buttom d-flex flex-r</div>ow"><div className="sub-header-buttom d-flex flex-row"> */}
      <PrimaryButton className='buttom' checked={false} text={t('createCustomer')} onClick={_alertClicked} iconProps={addFriend} />
      <DefaultButton className='buttom' checked={false} text={t('editing')} id={'Editing'} onClick={_alertClicked} iconProps={editContact} />
      <DefaultButton className='buttom' checked={false} iconProps={UserRemove} text={t('deletion')} id={'Deletion'} onClick={_alertClicked} />
      <DefaultButton className='buttom' checked={false} text={t('save')} id={'Save'} onClick={_alertClicked} />
    {/* </div> */}
  


<Subheading title={t("customerDetails")} />

{/* <div className=""> */}
<b>{customer.Gender}</b>
<br></br>
<b>{customer.StatusCustomer}</b>
<br></br>
<b>{customer.FirstName}</b>
<b>{customer.LastName}</b>
<b>{customer.Note}</b>
<b>{customer.CustomerLock}</b>
<b>{customer.FirstName}</b>
{/* <b>{customer.DateOfBirth}</b> */}

<CustomToggle onText={t('customerLock')} onChange={updateUser} id={'CustomerLock'} defaultChecked={true} />
<p>{t('personalDetails')}</p>
<CustomDropdown otherInputId={'othercustomerCondition'} hasOtherValue={true} options={statusCustomerArray} label={t('customerCondition')} onChange={updateUser} selectedKey={customer.CustomerCondition} id={'CustomerCondition'} othertextInput={t('othercustomerCondition')} />
<CustomDropdown otherInputId={''} hasOtherValue={false} options={statusCustomerArray} label={t('customerStatus')} onChange={updateUser} selectedKey={customer.StatusCustomer} id={'StatusCustomer'} othertextInput={t('')} />
<CustomDropdown otherInputId={''} hasOtherValue={false} options={statusCustomerArray} label={t('customerType')} onChange={updateUser} selectedKey={customer.CustomerType} id={'StatusCustomer'} othertextInput={t('')} />
{/* <Stack tokens={stackTokens} styles={stackStyles} > */}

  <CustomDropdown otherInputId={'OtherGender'} hasOtherValue={true} options={genderArray} label={t('gander')} onChange={updateUser} selectedKey={customer.Gender} id={'Gender'} othertextInput={t('other')} />

  <CustomTextFieldAddInput required={true} label={t('firstName')} onChange={updateUser} id={'FirstName'} iconProps={addIcon} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />
  <CustomTextField required={true} label={t('lastName')} onChange={updateUser} id={'LastName'} />
  <CustomTextField required={true} label={t('dateOfBirth')} onChange={updateUser} id={'DateOfBirth'} />
  <CustomTextField required={true} label={t('customerNumber')} onChange={updateUser} id={'customerNumber'} />
  <TextFeildNote label={t('note')} onChange={updateUser} id={'Note'} />
  <CustomTextFieldAddInput required={true} label={t('ViewNoteWhenPerformingAnAction')} onChange={updateUser} id={'FirstName'} iconProps={addIcon} otherInputId={'MiddleName'} othertextItnput={t("middleName")} />

{/* </Stack> */}

{/* 

</div> */}
</div>

    </>
  );
}



function _alertClicked(): void {
  alert('Clicked');
}



export default CustomerDetails;



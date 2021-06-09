import react from 'react';
import { useState } from 'react';

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
//   const [customer, setCustomer] = useState(new Customer(''));

//   //set state from custem component
//  const updateUserHook = (key: string, value: any) => {
//     let newCus = { ...customer };
//     (newCus as any)[key] = value;
//     setCustomer(newCus);
//   }

import axios from "axios";
import { Dispatch } from "react";
import {  ICustomer } from "../../components/customerDetails/CustomerDetails";
import { basicUrl } from "../../shared/config";
import { checkHttpStatus } from "../../utils";
import { CREATE_CUSTOMER, LOGIN_FAIL } from '../actions/types';
import { returnErrors } from "./errorActions";

export const createCustomer = (customer: ICustomer, ListId: any ) => async (dispatch: any,) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  console.log("intiator and client", ListId[0].value, ListId[2].value[0])

  let isCreate = false;
  const createCustomer = {
    id_initiator: ListId[0].value,

    id_client: ListId[1].value,

    id_branch: ListId[2].value,

    entity_request_method: "create",

    ID_country_code: "IL",

    ID_number: customer.identityNumber,

    ID_type_id: customer.idTypeId,

    status_id: customer.classId,

    class_id: 1,

    entity_type_id: "customer",

    entity_sub_type_id: customer.entitySubTypeId,

    first_name: customer.firstName,

    last_name: customer.lastName,

    entity_name: (customer.lastName + " " + customer.firstName),

    first_name_en: "Amit",

    last_name_en: "Keresanty",

    entity_name_en: "Amit Keresanty",

    date_birth:new Date(customer.dateBirth + "Z"),

    gender_id: customer.gender,

    id_identifier: 1,

    is_identified: true,

    is_loaded_documentation: false,

    is_locked: customer.isLocked,

    note: customer.note,

    permission_group_id: 1,

    return_entity: true,

    user_language: "HE",

    user_time_zone: "Israel Standard Time"

  }
  const body = JSON.stringify(createCustomer);
  console.log("body has json",body)

  let res = await axios.post(basicUrl + '/uspEntity', body, config)
    .then(checkHttpStatus)
    .then((res) => {
      try {
        if (res.status == 200) {
          console.log("THE DATA recive is cool",res.data)
          dispatch({
            type: CREATE_CUSTOMER,
            value: res.data
          })
          CreateAddress(customer);
          CreatePhone(customer);
          let isCreate = CreateEmail(customer)
          return isCreate;
        }

        console.log("res sucsees", res)
      }
      catch (e){
        console.log("errordata",res, e)
      }
    })
    .catch (err=> {
    console.log("dataerror", err)
    err.response ? returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL') : returnErrors('the server is down pls try later', 'LOGIN_FAIL')
    dispatch({
      type: LOGIN_FAIL
    })
    console.warn('error in login component', err)
    alert("login failed")
  })
  return true;
}

const CreateAddress = async (customer: ICustomer) => {
  const address = {
    id_initiator: 1,

    id_client: 2,

    id_entity: 3,

    return_entity: true,

    attribute_request_method: "create",

    entity_request_method: "create",

    attribute: "address",

    address_type_id: 2,

    address_name: customer.address,

    address_number: customer.addressNumber,

    address_city: customer.addressCity,

    address_country_code: "IL",

    address_zip_code: "98765",

    is_deleted: 0,

    is_default: 1

  }

  const body = JSON.stringify(address);
  console.log("create address", body)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let res = await axios.post(basicUrl + '/uspEntity', body, config)

  console.log("address" + res)

}

const CreatePhone = async (customer: ICustomer) => {


  const phone = {
    "id_initiator": 1,

    "id_client": 2,

    "id_entity": 3,

    "return_entity": true,

    "attribute_request_method": "create",

    "attribute": "telephone",

    "entity_type_id": "customer",

    "telephone_number": customer.telephone,

    "telephone_country_code": "IL",

    "telephone_type_id": "972",

    "is_deleted": 0,

    "is_default": 1
  }
  const body = JSON.stringify(phone);
  console.log("create phone", body)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let res = await axios.post(basicUrl + '/uspEntity', body, config)

  console.log("phone" + res)

}

const CreateEmail = async (customer: ICustomer) => {
  const email = {
    "id_initiator": 1,

    "id_client": 2,

    "id_entity": 3,

    "return_entity": true,

    "attribute_request_method": "create",

    "attribute": "email",

    "entity_type_id": "customer",

    "email_type_id": 1,

    "email_address": customer.email,

    "is_deleted": 0,

    "is_default": 1

  }
  const body = JSON.stringify(email);
  console.log("create email ", email)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let res = await axios.post(basicUrl + '/uspEntity', body, config)
  try {
    if (res.status === 200) {
      if (res.data["err_code"] === 0) {
        return true

      }
    }
  }
  catch (err) {
    console.log(res.status)

    console.warn('error in login component', err)
    alert("login failed")
    throw ("the Customer dont created  ")
  }
  return false;
}


const UpdateCustomer = async (customer: ICustomer) => {
  const updateCustomer = {

    "id_initiator": 1,

    "id_client": 1,

    "id_entity": 3,

    "entity_type_id": "customer",

    "entity_request_method": "update",

    "status_id": 2,

    "first_name": "שם פרטי",

    "gender_id": 2,

    "return_entity": false,

    "last_name_en": "Hooooome"

  }
  const body = JSON.stringify(updateCustomer);
  console.log("create email ", updateCustomer)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let res = await axios.post(basicUrl + '/uspEntity', body, config)
  try {
    if (res.status === 200) {
      if (res.data["err_code"] === 0) {
        return true

      }
    }
  }
  catch (err) {
    console.log(res.status)
    console.warn('error in login component', err)
    throw ("the Customer dont created  ")
  }
  return false;
}





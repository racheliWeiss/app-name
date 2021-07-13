import axios from "axios";
import { Dispatch } from "react";
import { ICustomer, IUserCredentials } from "../../components/customerDetails/CustomerDetails";
import { basicUrl } from "../../shared/config";
import { checkHttpStatus } from "../../utils";
import { CREATE_CUSTOMER, LOGIN_FAIL, READ_CUSTOMER } from '../actions/types';
import { returnErrors } from "./errorActions";

let currUserCredentials: IUserCredentials|null=null
export const createCustomer = (customer: ICustomer, userCredentials:IUserCredentials) => async (dispatch: any,) => {
   currUserCredentials = userCredentials
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  console.log("intiator and client", currUserCredentials)

  let isCreate = false;
  const createCustomer = {
    id_initiator: currUserCredentials["idInitiator"],

    id_client: currUserCredentials["idClient"],

    id_branch: currUserCredentials["idBranch"],

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

    date_birth: new Date(customer.dateBirth + "Z"),

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
  console.log("body has json", body)

  let res = await axios.post(basicUrl + '/uspEntity', body, config)
    .then(checkHttpStatus)
    .then((res) => {
      try {
        if (res.status == 200) {
          console.log("THE DATA recive is cool", res.data)
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
      catch (e) {
        console.log("errordata", res, e)
      }
    })
    .catch(err => {
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
    //@ts-ignore
    id_initiator: currUserCredentials.idInitiator,
//@ts-ignore
    id_client: currUserCredentials.idClient,

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


export const readCustomerId = (idEntity:string,userCredentials:any) => async (dispatch: Function) => {
  
  //@ts-ignore
  console.log("listIdEntity[0].value",userCredentials)
  const updateCustomer = {
    "entity_request_method": "read",
    "id_initiator":1,
    "id_client": 3,
    "id_entity": idEntity
  }
  const body = JSON.stringify(updateCustomer);
  console.log("create updateCustomer ", updateCustomer)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios.post(basicUrl + '/uspEntity', body, config)
    .then(res => {
      try {
        if (res.status === 200) {
          if (res.data["err_code"] === 0) {
            dispatch({
              type: READ_CUSTOMER,
              value: res.data
            })

          }
        }
      }
      catch (err) {
        console.log(res.status)
        console.warn('error in login component', err)
        throw ("the Customer dont created  ")
      }
    })
  .catch(err => {
        dispatch(
          err.response ? returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL') : returnErrors('the server is down pls try later', 'LOGIN_FAIL')
        );
      })


}





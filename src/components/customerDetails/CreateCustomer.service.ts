import axios from "axios";
import { basicUrl } from "../../shared/config";
import { Customer } from "./CustomerDetails";

export const CreateCustomer = async (customer:Customer,  ListId:any ,requestMethod:string)=>{
    // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  console.log("intiator and client",ListId[0].value, ListId[2].value[0])
  let isCreate = false;
  const createCustomer = {
      id_initiator:ListId[0].value,
      
      id_client:ListId[1].value,
      
      id_branch: ListId[2].value,
      
      entity_request_method: "create",
      
      ID_country_code:"IL",
      
      ID_number: customer.IdentityNumber,
      
      ID_type_id: customer.TypeIdentityNumber,
      
      status_id: customer.CustomerStatus,
      
      class_id: 1,
      
      entity_type_id: "customer",
      
      entity_sub_type_id: customer.CustomerType,
      
      first_name: customer.FirstName,
      
      last_name: customer.LastName,
      
      entity_name:(customer.LastName+" "+customer.FirstName),
      
      first_name_en: "Amit",
      
      last_name_en: "Keresanty",
      
      entity_name_en: "Amit Keresanty",
      
      date_birth: customer.DateOfBirth,
      
      gender_id: customer.Gender,
      
      id_identifier: 1,
      
      is_identified: true,
      
      is_loaded_documentation: false,
      
      is_locked: customer.CustomerLock,
      
      note: customer.Note,
      
      permission_group_id: customer.CustomerCondition,
      
      return_entity: true,
      
      user_language: "HE",
      
      user_time_zone: "Israel Standard Time"
      
      }
      const body = JSON.stringify(createCustomer);
      console.log(body);
      let res =await axios.post(basicUrl +'/uspEntity' ,body,config)
      try {
        if (res.status == 200) {
            console.log("data from create customer cool",res.data)
            CreateAddress(customer);
            CreatePhone(customer);
            let isCreate=CreateEmail(customer)
            return isCreate;
        }
        console.log("res sucsees",res)
    }
    catch (err) {
        console.log(res.status)
        console.warn('error in login component', err)
        alert("login failed")
    }
    return isCreate
  } 

  const CreateAddress = async (customer:Customer) =>{
    const address={
        id_initiator: 1,
        
        id_client: 2,
        
        id_entity: 3,
        
        return_entity: true,
        
        attribute_request_method: "create",

        entity_request_method:"create",
        
        attribute: "address",
        
        address_type_id: 2,
        
        address_name:  customer.Adress,
  
        address_number:customer.HouseNumber,
        
        address_city:  customer.AddressCity,
        
        address_country_code: "IL",
        
        address_zip_code: "98765",
        
        is_deleted: 0,
        
        is_default: 1
        
        }
        
        const body = JSON.stringify(address);
        console.log("create address",body)
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
  
        let res =await axios.post(basicUrl +'/uspEntity' ,body,config)
  
        console.log("address"+res)
     
    }
  
    const CreatePhone = async (customer:Customer)=>{
      
      
       const phone = {"id_initiator": 1,
        
        "id_client": 2,
        
        "id_entity": 3,
        
        "return_entity": true,
        
        "attribute_request_method": "create",
        
        "attribute": "telephone",
        
        "entity_type_id": "customer",
        
        "telephone_number":customer.Telephone ,
        
        "telephone_country_code": "IL",
        
        "telephone_type_id":"972",
        
        "is_deleted": 0,
        
        "is_default": 1
    }
    const body = JSON.stringify(phone);
    console.log("create phone",body)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    let res =await axios.post(basicUrl +'/uspEntity' ,body,config)
  
    console.log("phone"+res)
  
  }
  
  const CreateEmail = async (customer:Customer)=>{
    const email={
      "id_initiator": 1,
      
      "id_client": 2,
      
      "id_entity": 3,
      
      "return_entity": true,
      
      "attribute_request_method": "create",
      
      "attribute": "email",
      
      "entity_type_id": "customer",
      
      "email_type_id": 1,
      
      "email_address": customer.Email,
      
      "is_deleted": 0,
      
      "is_default": 1
      
      }
      const body = JSON.stringify(email);
      console.log("create email ",email)
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      let res =await axios.post(basicUrl +'/uspEntity' ,body,config)
      try {
        if (res.status === 200) {
            if(res.data["err_code"]===0)
            {
              return true

            }
        }
    }
    catch (err) {
        console.log(res.status)

        console.warn('error in login component', err)
        alert("login failed")
        throw("the Customer dont created  ")
    }
    return false;
  }


  const UpdateCustomer= async (customer:Customer)=>{
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
      console.log("create email ",updateCustomer)
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      let res =await axios.post(basicUrl +'/uspEntity' ,body,config)
      try {
        if (res.status === 200) {
            if(res.data["err_code"]===0)
            {
              return true

            }
        }
    }
    catch (err) {
        console.log(res.status)
        console.warn('error in login component', err)
        throw("the Customer dont created  ")
    }
    return false;
  }
  
  
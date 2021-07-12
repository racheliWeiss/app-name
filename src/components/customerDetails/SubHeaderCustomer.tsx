import { DefaultButton, IconButton, PrimaryButton, values } from '@fluentui/react';
import axios from 'axios';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icons } from '../../modelsType/Icon';
import '../../scssPages/sub-header.scss';
import Title from '../../shared/components/Title';
import { basicUrl } from '../../shared/config';
import '../../scssPages/form.scss'
import { connect, useDispatch, useSelector } from 'react-redux';
import { IAuthReduxProps } from '../../modelsType/type/interface';
import { ICustomer } from './CustomerDetails';


interface IProp {
    customer:ICustomer
  }

export const SubHeader:React.FunctionComponent <IProp>= (props) => {
    const {customer}=props

    let listId:any[];
  //translate hooks
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();

  // const ListId = useSelector(user => detailUser(user){
  //     let obj = JSON.parse(user)

  //     listId=[{key:"idInitiator", value:obj.id_entity},
  //     {key:" idClient", value:obj.data.client.id_entity}, 
  //     {key:"id_branch", value:obj.data.branch.id_entity }];
  //      return listId;  
  // });
  const ListId = useSelector((state:any)=>{
      let obj = JSON.parse(state.auth.user)
      listId=[{key:"idInitiator", value:obj.data.id_entity},
      {key:" idClient", value:obj.data.client.id_entity}, 
      {key:"id_branch", value:obj.data.branch.id_entity }];
       return listId;  
  });


  //send to detail customer to save
    const CreateCustomer = async ()=>{
      // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const createCustomer = {
      "id_initiator": 1,

      "id_client": 2,
      
      "id_branch": 3,
      
      "entity_request_method": "create",
      
      "ID_country_code": "IL",
      
      "ID_number": "23245412",
      
      "ID_type_id": 1,
      
      "status_id": 1,
      
      "class_id": 1,
      
      "entity_type_id": "customer",
      
      "entity_sub_type_id": 1,
      
      "first_name": "עמית",
      
      "last_name": "קרסנטי",
      
      "entity_name": "עמית קרסנטי",
      
      "first_name_en": "Amit",
      
      "last_name_en": "Keresanty",
      
      "entity_name_en": "Amit Keresanty",
      
      "date_birth": "2001-10-10",
      
      "gender_id": 1,
      
      "id_identifier": 1,
      
      "is_identified": true,
      
      "is_loaded_documentation": false,
      
      "is_locked": true,
      
      "note": "Note for Amit User",
      
      "permission_group_id": 1,
      
      "return_entity": true
        }
        const body = JSON.stringify(createCustomer);
        console.log(body);
        let res =await axios.post(basicUrl +'/uspEntity' ,createCustomer,config)
        try {

          if (res.status === 200) {
              CreateAddress(customer);
              CreatePhone(customer);

              console.log("get data from create detail",res)
              console.log("h8"+res.data)
              // const myUser = respons.data.user;
              // saveUser(myUser);
              console.log("gd")
          }
      }
      catch (err) {
          console.log(res.status)
          console.warn('error in login component', err)
          alert("login failed")
      }
       
    } 
  return (
    <>
    <div className="sub-header">
      <Title
        title={t("customers")} />
      <div className="divider"></div>
      <PrimaryButton className='button'  type="submit" checked={false} text={t('createCustomer')}iconProps={Icons.addFriend} onClick={CreateCustomer}/>
      <DefaultButton className='button' checked={false} text={t('editing')} id={'Editing'} onClick={_alertClicked} iconProps={Icons.editContact} />
      <DefaultButton className='button' checked={false} iconProps={Icons.userRemove} text={t('deletion')} id={'Deletion'} onClick={_alertClicked} />
      <DefaultButton className='button' checked={false} text={t('save')} id={'Save'} onClick={_alertClicked} iconProps={Icons.cloudUpload} />
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
       <hr className="hr"></hr>
    </div>
    </>
  )

}
const mapStateToProps = (state: IAuthReduxProps) => ({
  auth: state.authReducer
});


export default connect(mapStateToProps, null)(SubHeader);


//for example click
function _alertClicked(): void {
  alert('Clicked');
}

const CreateAddress = async (customer:ICustomer) =>{
  const address={
      id_initiator: 1,
      
      id_client: 2,
      
      id_entity: 3,
      
      return_entity: true,
      
      attribute_request_method: "create",
      entity_request_method:"create",
      
      attribute: "address",
      
      address_type_id: 2,
      
      address_name:  customer.Address,

      address_number:customer.addressNumber,
      
      address_city:  customer.AddressCity,
      
      address_country_code: customer.IDCountryCode,
      
      address_zip_code: "98765",
      
      is_deleted: 0,
      
      is_default: 1
      
      }
      
      const body = JSON.stringify(address);
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      let res =await axios.post(basicUrl +'/uspEntity' ,body,config)

      console.log("address"+res)
   
  }

  const CreatePhone = async (customer:ICustomer)=>{
    

     const phone = {"id_initiator": 1,
      
      "id_client": 2,
      
      "id_entity": 3,
      
      "return_entity": true,
      
      "attribute_request_method": "create",
      
      "attribute": "telephone",
      
      "entity_type_id": "customer",
      
      "telephone_number":customer.Telephone ,
      
      "telephone_country_code": customer.TelephoneCountryCode,
      
      "telephone_type_id": customer.TypeIdentityNumber,
      
      "is_deleted": 0,
      
      "is_default": 1
  }
  const body = JSON.stringify(phone);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let res =await axios.post(basicUrl +'/uspEntity' ,body,config)

  console.log("phone"+res)

}

const CreateEmail = async (customer:ICustomer)=>{
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
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    let res =await axios.post(basicUrl +'/uspEntity' ,body,config)

    console.log("email"+res)
}




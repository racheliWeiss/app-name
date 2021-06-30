import * as React from 'react';
import "./contact.scss";
import "../../scssPages/form.scss";
import CustemTable, {  } from '../../shared/components/tabels/TableList';
import { useTranslation } from 'react-i18next';
import Subtitle from '../../shared/components/Subtitle';



export interface IDetailsListItem {
    key: number;
    value: number;
    name:string;
  }
const Contact =()=>{
  
  const [t, i18n] = useTranslation();


  const headerStyle = {
    cellTitle: {
      color: "#1A1F71",
      background: '#F4F2FF',
      border: '8px'
    }
  }
    const columns = [       
        {key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200},
        { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200},
        { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200},
      ];
     const items=[
         {key: 1, name:"good",value:1},
         {key:2, name:"good",value:12},
         {key: 3, name:"goo",value:12},
         {key:4, name:"good",value:12},
         {key:5, name:"good",value:12}
        ]
    return(
        <>

        <div className="content-wrapper">
          <Subtitle title={t('customerSearch')}/>
    
           <label className="">{t('addresses')}</label>
            <CustemTable columns={columns} allItems={items} textBottun={'addAddress'} addCustem={true} />
        
          <label className=" contact-text">{t('email')}</label>
          <CustemTable columns={columns} allItems={items} textBottun={t('addEmail')} addCustem={true} />

          <label className=" contact-text">{t('phones')}</label>
          <CustemTable columns={columns} allItems={items} textBottun={t('addPhone')} addCustem={true} />

          {/* <DetailsListBasicExample columns={columns} allItems={item} />
         
          <p></p>
          <DetailsListBasicExample columns={columns} allItems={item} />
          <p></p>
          <DetailsListBasicExample columns={columns} allItems={item} />
           */}
           </div>
        </>

    );
}
export default Contact;


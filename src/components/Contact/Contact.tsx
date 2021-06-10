import * as React from 'react';
import "./contact.scss"
import { IDetailsColumnStyles } from '@fluentui/react';
import { DetailsListBasicExample } from '../../shared/components/tabels/tableList';
import { useTranslation } from 'react-i18next';
import SubHeader from '../SubHeader';
import custemTable from '../../shared/components/tabels/table';
import CustemTable from '../../shared/components/tabels/table';
import SubTitle from '../../shared/components/TitleText';
import Title from '../../shared/components/Title';
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
        { styles:headerStyle ,key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true , isModalSelection: false,styleHeader:'dataListHeader'},
        {styles: headerStyle, key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true ,isModalSelection: false,styleHeader:'dataListHeader'},
        {styles: headerStyle, key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true ,isModalSelection: false,styleHeader:'dataListHeader'},
      ];
     const item:IDetailsListItem[]=[
         {key: 1, name:"good",value:1},
         {key:2, name:"good",value:12},
         {key: 3, name:"goo",value:12},
         {key:4, name:"good",value:12},
         {key:5, name:"good",value:12}
        ]
    return(
        <>
 <SubHeader/>
        <div className="">
          <Subtitle title={t('customerSearch')}/>

           <label className="contact-text">{t('addresses')}</label>
          <CustemTable textButtun={t('addAddress')}/>
          <label className=" contact-text">{t('email')}</label>

          <CustemTable textButtun= {t('addEmail')}/>
          <label className=" contact-text">{t('phones')}</label>

          <CustemTable textButtun={t('addPhone')}/>
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


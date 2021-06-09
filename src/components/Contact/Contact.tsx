import * as React from 'react';
import '../../scssPages/form.scss';
import "./contact.scss"
import { IDetailsColumnStyles } from '@fluentui/react';
import { DetailsListBasicExample } from '../../shared/components/tabels/tableList';
import { useTranslation } from 'react-i18next';
import SubHeader from '../SubHeader';



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
        <div className="content-wrapper contact-warper">
         <div className=" ms-Grid-row">
           <p className=" contact-text">{t('adress')}</p>
           <div className="ms-Grid-row">
          <DetailsListBasicExample columns={columns} allItems={item} />
          </div>
          <p></p>
          <DetailsListBasicExample columns={columns} allItems={item} />
          <p></p>
          <DetailsListBasicExample columns={columns} allItems={item} />
          </div>
          </div>
        </>

    );
}
export default Contact;


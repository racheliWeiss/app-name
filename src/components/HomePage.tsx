import * as React from 'react';
import { DetailsListBasicExample } from '../shared/components/DetailsList';
import '../scss/form.scss';
import { IDetailsColumnStyles } from '@fluentui/react';



export interface IDetailsListItem {
    key: number;
    value: number;
    name:string;
  }
const Documents =()=>{
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
      ];
     const item:IDetailsListItem[]=[
         {key: 1,value:2 ,name:"good",},
         {key:2,value:3,name:"good"},
         {key: 3,value:2 ,name:"good"},
         {key:4,value:3,name:"good"}
        ]
    return(
        <>
        <h1>Documents</h1>

          <DetailsListBasicExample columns={columns} items={item} />
        </>

    );
}
export default Documents;
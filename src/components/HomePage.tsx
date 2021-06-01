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
        {styles: headerStyle, key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true ,isModalSelection: false,styleHeader:'dataListHeader'},
      ];
     const item:IDetailsListItem[]=[
         {key: 1, name:"good",value:1},
         {key:2, name:"good",value:12},
         {key: 3, name:"goo",value:12},
         {key:4, name:"good",value:12}
        ]
    return(
        <>
        <h1>Documents</h1>

          <DetailsListBasicExample columns={columns} allItems={item} />
        </>

    );
}
export default Documents;
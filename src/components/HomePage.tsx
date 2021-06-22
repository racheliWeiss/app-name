import * as React from 'react';
import '../scssPages/form.scss';
import { IDetailsColumnStyles } from '@fluentui/react';
import CustemTable, {  } from '../shared/components/tabels/TableList';
import SubHeader from './SubHeader';



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
    }
  }
 

    const columns = [       
        {key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200},
        {key: 'column2', name: 'Value', fieldName: 'value',minWidth: 100, maxWidth: 200 },
        {key: 'column2', name: 'Value', fieldName: 'value',minWidth: 100, maxWidth: 200},
      ];
     const item:IDetailsListItem[]=[
         {key: 1, name:"good",value:1},
         {key:2, name:"good",value:12},
         
        ]
    return(
        <>
        
        <h1>Documents</h1>
         <div className="content-wrapper">
          <CustemTable columns={columns} allItems={item} isSelcted={true} isFooter={false} />
          </div>
        </>

    );
}
export default Documents;
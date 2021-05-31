import * as React from 'react';
import { DetailsListBasicExample } from '../shared/components/DetailsList';


export interface IDetailsListItem {
    key: number;
    value: number;
  }
const Documents =()=>{
    
    const columns = [
        { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
      ];
     const item:IDetailsListItem[]=[{key: 1,value:2},{key:2,value:3}]
    return(
        <>
        <h1>Documents</h1>

          <DetailsListBasicExample columns={columns} items={item}/>
        </>

    );
}
export default Documents;
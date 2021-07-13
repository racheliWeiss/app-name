import * as React from 'react';
import { DetailsList, Selection, IColumn, SelectionMode, DetailsRow, IDetailsFooterProps } from '@fluentui/react/lib/DetailsList';
import { DefaultButton, IRenderFunction } from '@fluentui/react';
import { useEffect, useState } from 'react';
import "./detaiList.scss"
import {RouteComponentProps, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBoolean } from '@fluentui/react-hooks';
import { CustemDialogAddress, CustemDialogEmail, CustemDialogPhone } from '../dialog/Dialog';




export interface IDetailsListItem {
  key: number;
  name: string;
  value: number;
}

export interface IDetailsListState {
  selectionDetails?: string;
  columns: [] | IColumn[];
  allItems:any[];
  styleHeader?: string
  isSelcted?:boolean;
  isFooter?:boolean;
  rederRow?:string;
  search?:boolean;
  addCustem?:boolean;
  textBottun?:string;
  renderItemColumn?:any

}
interface PropsInterface extends RouteComponentProps<any> {}

const footerStyle = {
  root: {
      background: '#E1E1E1',
  }
}
// renderItemColumn=()=>{} ,
const CustemTable: React.FunctionComponent<IDetailsListState> = (props) => {
  const { allItems , columns, isSelcted = false, isFooter=true, rederRow="",search=false, addCustem=false ,textBottun=""} = props
  let isSelection=SelectionMode.none
  if(isSelcted === true){
     isSelection=SelectionMode.single
     
  }
  const renderRow=rederRow;
   
  const [state, setState] = React.useState({
    items: allItems,
    columns: columns,
  });
  // if(search===true)  {
  // columns.map(col:IColumn)=>
  //     {
  //       col.push([onColumnClickk]=)
  //     }
  //   );
  // }
  const [t, i18n] = useTranslation();
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [selectedItem, setSelectedItem] = useState<Object | undefined>(undefined)
  const history = useHistory()
  const selection = new Selection({
    onSelectionChanged: () => {
      console.log(selection.getSelection());
      setSelectedItem(selection.getSelection())
    }
  })
  useEffect(() => {
    // Do something with the selected item
    console.log(selectedItem)
  }, [selectedItem])

  const onChange = (ke: string, val: any) => {
    console.log("col" + ke + "0" + val); 
   }
 
  const renderItemColumn = (item: any, index: any, column: any) => {
   
    let fieldContent = item[column.fieldName];
    console.log("fieldContent in culmn",fieldContent)
    switch (column.fieldName) {
        case renderRow:
          //@ts-ignore
          console.log("index in column",allItems[index].idEntity)
          index = allItems[index].idEntity
          return <DefaultButton text={t('details')}name={index} onClick={()=>history.push(`/customer-details/${index}`)}/> 
           
          {/* <Link to={{
                pathname: '/customer-details',
                state: [{id: 1, name: 'Ford', color: 'red'}]
              }}> {t('details')} </Link>  */}
              {/* <Link to={`/customer-details/${index}`}> p</Link> 
              </DefaultButton> */}
        default:
            return <span >{fieldContent}</span>;
    }
}
 

  let onRenderDetailsFooter: IRenderFunction<IDetailsFooterProps> = (detailsFooterProps?: IDetailsFooterProps) => {
    if (!props) {
      return null;
    }
    if(isFooter===false){
      return null;
    }
    return (
      <DetailsRow
        {...detailsFooterProps}
        columns={detailsFooterProps?.columns}
        item={{}}
        itemIndex={-1}
        // groupNestingDepth={detailsFooterProps?.groupNestingDepth}
        styles={footerStyle}
    
      />
    );
  };

  return (

    <div>
      {textBottun==="addAddress" ?<CustemDialogAddress textButton={t(textBottun)}/>:null}
      {textBottun==="addPhone" ? <CustemDialogPhone textButton={t(textBottun)}/> :null}
      {textBottun==="addEmail" ? <CustemDialogEmail textButton={t(textBottun)}/> :null}

   
      <div className="continar">
        <DetailsList
          items={allItems}
          columns={columns}
          selection={selection}
          selectionMode={isSelection}
          // selectionPreservedOnEmptyClick={true}
          onRenderDetailsFooter={onRenderDetailsFooter}
          onRenderItemColumn={renderItemColumn}
        />
      </div>
   </div>
  );

}


export default CustemTable;

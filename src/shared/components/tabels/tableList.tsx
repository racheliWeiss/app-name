import * as React from 'react';
import { TextField, } from '@fluentui/react/lib/TextField';
import { DetailsList, Selection, IColumn, SelectionMode, DetailsRow, IDetailsFooterProps } from '@fluentui/react/lib/DetailsList';
import { DefaultButton, Dialog, DialogFooter, IRenderFunction, PrimaryButton } from '@fluentui/react';
import { useEffect, useState } from 'react';
import "./detaiList.scss"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBoolean } from '@fluentui/react-hooks';
import { CustomTextField } from '../TextField';
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
  textBottun?:string

}

const footerStyle = {
  root: {
      background: '#F4F2FF',
  }
}

const CustemTable: React.FunctionComponent<IDetailsListState> = (props) => {
  const { allItems = [], columns, isSelcted = false, isFooter=true, rederRow="",search=false, addCustem=false ,textBottun=""} = props
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
    switch (column.key) {
        case renderRow:
            return <DefaultButton> <Link to={{
                pathname: '/customer-details',
                state: [{id: 1, name: 'Ford', color: 'red'}]
              }}> {t('details')} </Link> </DefaultButton>

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
      {textBottun==="addemail" ? <CustemDialogEmail textButton={t(textBottun)}/> :null}

   
      <div className="continar">
        <DetailsList
          items={state.items}
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

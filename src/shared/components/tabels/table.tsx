import { ConstrainMode,DetailsList, DetailsRow, IColumn, IDetailsFooterProps, IRenderFunction, PrimaryButton } from "@fluentui/react";
import { SelectionMode } from "office-ui-fabric-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IDetailsListItem } from "./tableList";
import './detaiList.scss'
import { CustomTextField } from "../TextField";
import { ItemScheduledSignal } from "@uifabric/experiments";
import TitleText from "../TitleText";
import {useBoolean}from "@fluentui/react-hooks"

interface Iprop {
    textButtun: string
}
const CustemTable = (props: Iprop) => {
    const { textButtun } = props


    const allItems: IDetailsListItem[] = [
        { key: 1, name: "good", value: 1 },
        { key: 2, name: "good", value: 12 },
        { key: 3, name: "goo", value: 12 },

    ]

    const headerStyle = {
        cellTitle: {
            color: "#1A1F71",
            background: '#F4F2FF',
            border: '8px'
        }
    }

    const columns = [
        { styles: headerStyle, key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
        { styles: headerStyle, key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
        { styles: headerStyle, key: 'custem', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
        { styles: headerStyle, key: 'fail', name: 'fail', fieldName: 'fail', minWidth: 100, maxWidth: 200, isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },

    ];

    const [t, i18n] = useTranslation();
    const [table, setTable] = useState({
        items: allItems,
        columns: columns,

        // selectionDetails: _getSelectionDetails()
    });

    const [isNewItem,setIsNewItem]=useState('')



    const footerStyle = {
        root: {
            background: '#F4F2FF',
        }
    }
    let changeItem: any = {}
    const onChange = (ke: string, val: any) => {
        // changeItem.push({4:val})
        console.log("col" + ke + "0" + val);
        // setState({items:allItems,columns:columns
        // }
        //     )
    }

    const addItem = () => {
       setIsNewItem("true")
    //   return(<TitleText  title="jo9u" />)

        //table.columns.map((col: any) => {

        //     return )
        // });
        // allItems.push(changeItem)
        // setState({items:allItems,columns:columns})



    }
    const saveItem =() =>{
        
    }
    

    const onRenderDetailsFooter: IRenderFunction<IDetailsFooterProps> = (props, defaultRender) => {
        if (!props) {
            return null;
        }
        return (
            <DetailsRow
                columns={[]}
                item={{ key: "1", name: "xjcb" }}
                styles={footerStyle}
                itemIndex={-1}
                selection={props.selection}
                selectionMode={(props.selection && props.selection.mode) || SelectionMode.none}
                rowWidth={1200}

            />
        );
    };
    return (



        <div className="continar">
            <PrimaryButton text={textButtun} onClick={addItem}  />
            
            {columns.map((col:any) => (
                isNewItem ? <CustomTextField label={col.fieldName} id={"j"} onChange={onChange} />:false
            ))}
            <PrimaryButton text={t('save')} onClick={saveItem}  />
            
         
            <DetailsList
                items={table.items}
                columns={columns}
                constrainMode={ConstrainMode.horizontalConstrained}
                onRenderDetailsFooter={onRenderDetailsFooter}
                selectionMode={SelectionMode.none}
            // setKey='set'

            />
        </div>



    );
}

export default CustemTable;
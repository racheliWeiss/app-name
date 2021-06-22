import { ConstrainMode,DetailsHeader,DetailsList, DetailsRow, IColumn, IDetailsFooterProps, IRenderFunction, PrimaryButton } from "@fluentui/react";
import { SelectionMode } from "office-ui-fabric-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IDetailsListItem } from "./TableList";
import './detaiList.scss'
import { CustomTextField } from "../TextField";
import React from "react";
import { GoIcon } from "@fluentui/react-icons-mdl2";

interface Iprop {
    textButtun: string
}

// const exampleChildClass = mergeStyles({
//     cellTitle: {
//         color: "#1A1F71",
//         background: '#F4F2FF',
//       }
// })
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
   const  onColumnClick = (_ev: React.MouseEvent<HTMLElement>, column: any) => {
        const { columns, items } = table;
        const newColumns = columns.slice();
        const currColumn:any = newColumns.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: any) => {
          if (newCol === currColumn) {
            currColumn.isSortedDescending = !currColumn.isSortedDescending;
            currColumn.isSorted = true;
            //  setAnnouncedMessage(
            //   announcedMessage: `${currColumn.name} is sorted ${
            //     currColumn.isSortedDescending ? 'descending' : 'ascending'
            //   }`,
            // );
          } else {
            newCol.isSorted = false;
            newCol.isSortedDescending = true;
          }
        });
        const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
        setTable({
          columns: newColumns,
          items: newItems,
        });
        return newColumns;
      };
    // }
    const columns:IColumn[]= [
        { styles:headerStyle, key: 'column1', name: 'Name', fieldName: 'name', isResizable: true,onColumnClick: onColumnClick  },
        { key: 'column2', name: 'Value', fieldName: 'value',  isResizable: true},
        { key: 'custem', name: 'Value', fieldName: 'value',  isResizable: true,  },
        { key: 'fail', name: 'fail', fieldName: 'fail',  isResizable: true},

    ];

    const [t, i18n] = useTranslation();
    const [announcedMessage,setAnnouncedMessage]=useState(undefined)
    const [table, setTable] = useState({
        items: allItems,
        columns: columns,
    


        // selectionDetails: _getSelectionDetails()
    });

    const [isNewItem,setIsNewItem]=useState('')
//     let conti:string;
//  conti="continar";
//     const renderDetailsHeader = ()
//     {
//         <DetailsHeader
//          columns={columns}
//         />
//     }

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
    

    const onRenderDetailsFooter: IRenderFunction<IDetailsFooterProps> = (detailsFooterProps?: IDetailsFooterProps) => {
        if (!props) {
            return null;
        }
        return (
            <DetailsRow
            {...detailsFooterProps}
            columns={detailsFooterProps?.columns}
            item={{}}
            itemIndex={-1}
            groupNestingDepth={detailsFooterProps?.groupNestingDepth}
            selectionMode={SelectionMode.single}
            selection={detailsFooterProps?.selection}
            styles={footerStyle}
            />
        );
    };
    return (



        <div className="continar">
               
            {/* <TextField
                
                label="Filter by name:"
                onChange={(e, t) => _onFilter(e, t ?? "")}
                  
            /> */}
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
                selectionMode={SelectionMode.single}
            // setKey='set'

            />
        </div>



    );

    // 
//    const _onColumnClick = (event: React.MouseEvent<HTMLElement>, column: IColumn): void => {
//     const { columns } = table.columns;
//     let { sortedItems } = table.items;
//     let isSortedDescending = column.isSortedDescending;

//     // If we've sorted this column, flip it.
//     if (column.isSorted) {
//       isSortedDescending = !isSortedDescending;
//     }

//     // Sort the items.
//     sortedItems = _copyAndSort(sortedItems, column.fieldName!, isSortedDescending);

//     // Reset the items and columns to match the state.
//     setTable({
//       items: sortedItems,
//       columns: columns.map((col:IColumn) => {
//         col.isSorted = col.key === column.key;

//         if (col.isSorted) {
//           col.isSortedDescending = isSortedDescending;
//         }

//         return col;
//       }),
//     });
//   };

    // const  onColumnClick = (_ev: React.MouseEvent<HTMLElement>, column: any) => {
    //     const { columns, items } = table;
    //     const newColumns = columns.slice();
    //     const currColumn:any = newColumns.filter(currCol => column.key === currCol.key)[0];
    //     newColumns.forEach((newCol: any) => {
    //       if (newCol === currColumn) {
    //         currColumn.isSortedDescending = !currColumn.isSortedDescending;
    //         currColumn.isSorted = true;
    //         //  setAnnouncedMessage(
    //         //   announcedMessage: `${currColumn.name} is sorted ${
    //         //     currColumn.isSortedDescending ? 'descending' : 'ascending'
    //         //   }`,
    //         // );
    //       } else {
    //         newCol.isSorted = false;
    //         newCol.isSortedDescending = true;
    //       }
    //     });
    //     const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
    //     setTable({
    //       columns: newColumns,
    //       items: newItems,
    //     });
    //     return newColumns;
    //   };
    // // }
    function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
      }
      
}

export default CustemTable;




// const _onFilter = (
    //     ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    //     text: string
    // ): void => {
    //     console.log(text);
    //     setState((prev) => {
    //         return {
    //             ...prev,
    //             items: text
    //                 ? allItems.filter((i) => i.name.toLowerCase().indexOf(text) > -1)
    //                 : allItems
    //         };
    //     });
    // };
    

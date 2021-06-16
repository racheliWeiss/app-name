import {  buildColumns, DefaultButton, DetailsHeader, DetailsList, IColumn, Link, mergeStyleSets } from "@fluentui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Route } from "react-router-dom";
import CustomerDetails from "./customerDetails/CustomerDetails";
import { IDetailsListItem } from "./HomePage";



export const TableList = () => {
   
       const allItems: IDetailsListItem[] = [
        { key: 1, name: "good", value: 1 },
        { key: 2, name: "good", value: 12 },
        { key: 3, name: "goo", value: 12 },
        { key: 4, name: "good", value: 12 },
        { key: 5, name: "good", value: 12 }
    ]
     
    const headerStyle = {
        root: {
            color: "#1A1F71",
            background: '#F4F2FF',
            border: '8px'
        }
    }
   

    const columns = [
        { styles: headerStyle, key: 'column1', name: 'Name', fieldName: 'name', isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
        { styles: headerStyle, key: 'column2', name: 'kc', fieldName: 'value', isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
        { styles: headerStyle, key: 'custem', name: 'Value', fieldName: 'value',  isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
        { styles: headerStyle, key: 'fail', name: 'fail', fieldName: 'fail', isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },

    ];
 
    const [t, i18n] = useTranslation();
    const [state, setState] = React.useState({
        items: allItems,
        columns:columns,
       
        // selectionDetails: _getSelectionDetails()
    });

    const renderItemColumn = (item: any, index: any, column: any) => {

        let fieldContent = item[column.fieldName];
        switch (column.key) {
            case 'custem':
               
                return <DefaultButton> <Link to={{
                    pathname: '/customer-details',
                    state: [{id: 1, name: 'Ford', color: 'red'}]
                  }}> {t('details')} </Link> </DefaultButton>
    
            default:
                return <span >{fieldContent}</span>;
        }
    }


    // const onColumnClick = (event: any, column: any )=> {
    //     const columns= state.columns;
    //     let sortedItems :IDetailsListItem[] = state.items;
    //     let isSortedDescending = column.isSortedDescending;
    
    //     // If we've sorted this column, flip it.
    //     if (column.isSorted) {
    //       isSortedDescending = !isSortedDescending;
    //     }
    
    //     // Sort the items.
    //     sortedItems = _copyAndSort(sortedItems, column.fieldName!, isSortedDescending);
    
    //     // Reset the items and columns to match the state.
    //     setState({
    //       items: sortedItems,
    //       columns: columns.map(col => {
    //         col.isSorted = col.key === column.key;
    
    //         if (col.isSorted) {
    //           col.isSortedDescending = isSortedDescending;
    //         }
    
    //         return col;
    //       }),
    //     });
    //   };

    return (

        <div>
            <div>
                <div className="ms-Grid table-warper">
                    <div className="ms-Grid-row">
                        <DetailsList
                            items={allItems}
                        //    onColumnHeaderClick={onColumnClick}
                            columns={columns}
                            // onRenderDetailsHeader={renderDetailsHeader}
                            setKey='set'

                             onRenderItemColumn={renderItemColumn}
                        />
                    </div>
                </div>
            </div>
            <Route exact path='/customer-details' component={CustomerDetails}/> 

        </div>
    );
}




function _buildColumns(items: IDetailsListItem[]): IColumn[] {
    const columns = buildColumns(items);
  
    const thumbnailColumn = columns.filter(column => column.name === 'thumbnail')[0];
  
    // Special case one column's definition.
    thumbnailColumn.name = '';
    thumbnailColumn.maxWidth = 50;
    thumbnailColumn.ariaLabel = 'Thumbnail';
  
    return columns;
  }

  function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
    const key = columnKey as keyof T;
    return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
  }
  




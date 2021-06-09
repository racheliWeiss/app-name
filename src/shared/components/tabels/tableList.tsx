import * as React from 'react';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn, SelectionMode, DetailsRow, IDetailsFooterProps, buildColumns } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { IRenderFunction, PrimaryButton } from '@fluentui/react';
import { useState } from 'react';
import "./detaiList.scss"

// const exampleChildClass = mergeStyles({
//     cellTitle: {
//         color: "#1A1F71",
//         background: '#F4F2FF',
//       }
// });
const classNames = mergeStyleSets({
    table: {
      margin: 'auto',
    }
  });

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };

export interface IDetailsListItem {
    key: number;
    name: string;
    value: number;
}

export interface IDetailsListState {
    selectionDetails?: string;
    columns: [] | IColumn[];
    allItems: IDetailsListItem[];
    styleHeader?: string

}


const headerStyle = {
    root: {
      background: '#F4F2FF',
      border: '8px'
    }
}
export const DetailsListBasicExample: React.FunctionComponent<IDetailsListState> = (props) => {
    const { allItems = [], columns } = props

    const numOfIcons = allItems.length;

    const [items, setItems] = useState(allItems)
    const [page, setPage] = useState(1);
    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page - 1);
    const [state, setState] = React.useState({
        items: allItems,
        columns: columns,
        // selectionDetails: _getSelectionDetails()
    });

    const _onFilter = (
        ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        text: string
    ): void => {
        console.log(text);
        setState((prev) => {
            return {
                ...prev,
                items: text
                    ? allItems.filter((i) => i.name.toLowerCase().indexOf(text) > -1)
                    : allItems
            };
        });
    };
    

    const onRenderDetailsFooter: IRenderFunction<IDetailsFooterProps> = (props, defaultRender) => {
        if (!props) {
          return null;
        }
        return (
              <DetailsRow
                columns={[]}
                item={{key:"1", name:"xjcb"}}
                styles={headerStyle}
                itemIndex={-1}
                selection={props.selection}
                selectionMode={(props.selection && props.selection.mode) || SelectionMode.none}
                rowWidth={1500}
            
              />
        );
      };

    return (
        <div>
            
            <TextField
                
                label="Filter by name:"
                onChange={(e, t) => _onFilter(e, t ?? "")}
                styles={textFieldStyles}    
            />
               <div data-is-scrollable={false}>
             {/* <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}> */}
            <DetailsList
                items={state.items}
               
                // onColumnHeaderClick={onColumnClick}
                columns={columns}
                selectionMode={SelectionMode.none}
                onRenderDetailsFooter={onRenderDetailsFooter}
                setKey="set"
            />
          {/* </div> */}
          </div>
        </div>
    );
    
}




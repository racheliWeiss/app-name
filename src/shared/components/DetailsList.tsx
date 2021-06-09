import * as React from 'react';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn, SelectionMode, DetailsRow, IDetailsFooterProps } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { IRenderFunction, PrimaryButton } from '@fluentui/react';
import { useState } from 'react';
import "../../scssPages/form.scss"

const exampleChildClass = mergeStyles({
    display: 'block',
    marginBottom: '10px',
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
            <div className={exampleChildClass}></div>
            <TextField
                className={exampleChildClass}
                label="Filter by name:"
                onChange={(e, t) => _onFilter(e, t ?? "")}
                styles={textFieldStyles}    
            />
            <DetailsList
                items={state.items}
                columns={columns}
                selectionMode={SelectionMode.none}
                onRenderDetailsFooter={onRenderDetailsFooter}
                setKey="set"
            />
        
        </div>
    );
}






//   private _onItemInvoked = (item: IDetailsListleItem): void => {
//     alert(`Item invoked: ${item.name}`);
//   };


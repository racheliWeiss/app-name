import * as React from 'react';
import { Announced } from '@fluentui/react/lib/Announced';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { Text } from '@fluentui/react/lib/Text';
import { PrimaryButton } from '@fluentui/react';
import { useState } from 'react';

const exampleChildClass = mergeStyles({
    display: 'block',
    marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };

export interface IDetailsListItem {
    key: number;
    value: number;
    name:string;
}

export interface IDetailsListState {
    selectionDetails?: string;
    columns: [] | IColumn[];
    allItems: IDetailsListItem[];
    styleHeader?:string

}

const classes = mergeStyleSets({
    cell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '80px',
        float: 'left',
        height: '50px',
        width: '50px',
    },
    icon: {
        fontSize: '50px',
    },
    code: {
        background: '#f2f2f2',
        borderRadius: '4px',
        padding: '4px',
    },
    navigationText: {
        width: 100,
        margin: '0 5px',
    },
});


export const DetailsListBasicExample: React.FunctionComponent<IDetailsListState> = (props) => {
    const { allItems=[], columns,styleHeader} = props

    const numOfIcons = allItems.length;
    const numOfPages = parseInt((numOfIcons / 100).toString(), 10) + (numOfIcons % 100 > 0 ? 1 : 0);
    
    const [items,setItems]=useState(allItems)
    const [page, setPage] = useState(1);
    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page - 1);


    const _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
        setItems({
            item:text ? allItems.filter((i: { name: string; }) => i.name.toLowerCase().indexOf(text) > -1) :allItems,
         });
       };


    return (
        <div>
            <div className={exampleChildClass}></div>
            <TextField
                className={exampleChildClass}
                label="Filter by name:"
                styles={textFieldStyles}
            />
            <DetailsList
                items={items}
                columns={columns}
                
                selectionMode={SelectionMode.none}
                setKey="set"
            />
            <div>
                <PrimaryButton
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={prevPage}
                    disabled={page === 1}
                >
                    Prev
        </PrimaryButton>
                <span className={classes.navigationText}>
                    Page {page} of {numOfPages}
                </span>
                <PrimaryButton
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={nextPage}
                    disabled={page === numOfPages}
                >
                    Next
        </PrimaryButton>
            </div>
        </div>
    );
}






//   private _onItemInvoked = (item: IDetailsListleItem): void => {
//     alert(`Item invoked: ${item.name}`);
//   };


import * as React from 'react';
import { Announced } from '@fluentui/react/lib/Announced';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { Text } from '@fluentui/react/lib/Text';

const exampleChildClass = mergeStyles({
    display: 'block',
    marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };

export interface IDetailsListItem {
    key: number;
    value: number;
}

export interface IDetailsListState {
    items: IDetailsListItem[];
    selectionDetails?: string;
    columns: [] | IColumn[];
    allItems?: IDetailsListItem[];

}

export const DetailsListBasicExample: React.FunctionComponent<IDetailsListState> = (props) => {
    const { items, columns } = props



    return (
        <div>
            <div className={exampleChildClass}></div>
            <Text>
                Note: While focusing a row, pressing enter or double clicking will execute onItemInvoked, which in this
                example will show an alert.
        </Text>

            <TextField
                className={exampleChildClass}
                label="Filter by name:"
                styles={textFieldStyles}
            />
            <DetailsList
                items={items}
                columns={columns}
                setKey="set"
            />
        </div>
    );
}





//   private _onItemInvoked = (item: IDetailsListleItem): void => {
//     alert(`Item invoked: ${item.name}`);
//   };


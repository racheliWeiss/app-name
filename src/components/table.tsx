import {  DefaultButton, DetailsList, Link } from "@fluentui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { IDetailsListItem } from "./HomePage";

const [t, i18n] = useTranslation();


export const TableList = () => {



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
    const item: IDetailsListItem[] = [
        { key: 1, name: "good", value: 1 },
        { key: 2, name: "good", value: 12 },
        { key: 3, name: "goo", value: 12 },
        { key: 4, name: "good", value: 12 },
        { key: 5, name: "good", value: 12 }
    ]
    return (
        <div>
            <div>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <DetailsList
                            items={item}
                            columns={columns}
                            setKey='set'
                            onRenderItemColumn={renderItemColumn}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const renderItemColumn = (item: any, index: any, column: any) => {
    let fieldContent = item[column.fieldName];
    switch (column.key) {
        case 'custem':
            return <DefaultButton> <Link href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" >{t('details')}</Link></DefaultButton>

        default:
            return <span >{fieldContent}</span>;
    }
}


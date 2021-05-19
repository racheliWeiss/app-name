import { TextField, values } from '@fluentui/react';
import React from 'react';
import react from 'react';
import ComponenetProps from '../../Models/ComponenetProps';
import { useBoolean } from '@fluentui/react-hooks';

import { IIconProps } from '@fluentui/react';
import { Interface } from 'node:readline';


interface MyProps extends ComponenetProps {
    label?: string,
    required?:boolean,
    iconProps ?: IIconProps
    

    // ?:IIconProps
}

export const CustomTextField: React.FunctionComponent<MyProps> = (props) => {
    const [muted, { toggle: setMuted }] = useBoolean(false);
    const { onChange, label, id,required, iconProps} = props;
    return (
        <TextField
            required={required?true:undefined}
            label={label}
            onChange ={(e: any) => {
            debugger;
                 onChange(id, e.currentTarget.value)
            }}
            iconProps={iconProps}
            onClick={setMuted}

   // onChange={(e, selectedOption) => {
            //     console.log(e + "" + selectedOption);
            //     onChange(id,selectedOption?.key);
            //   }}
           
        // onChange={(e: any) => setLogin_entity_number(e.target.value)}
        />
    );

}
interface AddInputProp extends MyProps{
    othertextItnput:string
    otherInputId:string
}
export const CustomTextFieldAddInput: React.FunctionComponent<AddInputProp> = (props) => {
    const [muted, { toggle: setMuted }] = useBoolean(false);
    const { onChange, label, id,required, iconProps ,othertextItnput,otherInputId} = props;
    return (
        <>
        <TextField
            required={required?true:undefined}
            label={label}
            onChange ={(e: any) => {
            debugger;
                 onChange(id, e.currentTarget.value)
            }}
            iconProps={iconProps}
            onClick={setMuted}

   // onChange={(e, selectedOption) => {
            //     console.log(e + "" + selectedOption);
            //     onChange(id,selectedOption?.key);
            //   }}
           
        // onChange={(e: any) => setLogin_entity_number(e.target.value)}
        />
        {muted  ? <CustomTextField required={true} label={othertextItnput} onChange={onChange} id={otherInputId} /> : false}
        </>
    );

}


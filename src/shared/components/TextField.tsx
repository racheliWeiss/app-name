import { TextField, values } from '@fluentui/react';
import React from 'react';
import ComponenetProps from '../../Models/type/interface';
import { useBoolean } from '@fluentui/react-hooks';
import "../../scss/form.scss"
import { IIconProps } from '@fluentui/react';
import { Interface } from 'node:readline';


interface MyProps extends ComponenetProps {
    label?: string,
    required?:boolean,
    iconProps ?: IIconProps
    type?:string,
    nameOfClassStyle?:string
 

    // ?:IIconProps
}


export const CustomTextField: React.FunctionComponent<MyProps> = (props) => {
    // const [muted, { toggle: setMuted }] = useBoolean(false); 
    const { onChange, label, id,required, iconProps ,type ,nameOfClassStyle="text-field"} = props;
    // if(nameOfClassStyle===undefined){
    //       const nameOfClassStyle="text-field"
    // }
    return (
        
        <TextField
            required={required?true:undefined}
            label={label}
            onChange ={(e: any) => {
                 onChange(id, e.currentTarget.value)
            }}
            iconProps={iconProps}
            className={nameOfClassStyle}
            type={type}
            // onClick={setMuted}
      
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
            className="text-field"
            

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




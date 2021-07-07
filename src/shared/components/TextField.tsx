import { TextField } from '@fluentui/react';
import React from 'react';
import ComponenetProps from '../../modelsType/type/interface';
import { useBoolean } from '@fluentui/react-hooks';
import "../../scssPages/form.scss"
import { IIconProps } from '@fluentui/react';



interface MyProps extends ComponenetProps {
    label?: string,
    required?:boolean,
    iconProps ?: IIconProps
    type?:string,
    nameOfClassStyle?:string
    value?:any
    readOnly?:boolean


    // ?:IIconProps
}


export const CustomTextField: React.FunctionComponent<MyProps> = (props) => {
    // const [muted, { toggle: setMuted }] = useBoolean(false); 
    const { readOnly=false , value = "", onChange, label, id,required, iconProps ,type ,nameOfClassStyle="text-field"} = props;
    // if(nameOfClassStyle===undefined){
    //       const nameOfClassStyle="text-field"
    // }
    return (
        
        <TextField
            required={required?true:undefined}
            label={label}
            onChange ={(e: any) => {
                 onChange(id, e.target.value)
            }}
            iconProps={iconProps}
            className={nameOfClassStyle}
            type={type}
            value={value}
            readOnly ={readOnly}
           
           
        />
            // onClick={setMuted}
      
   // onChange={(e, selectedOption) => {
            //     console.log(e + "" + selectedOption);
            //     onChange(id,selectedOption?.key);
            //   }}
           
        // onChange={(e: any) => setLogin_entity_number(e.target.value)}
     
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
        {muted  ? <CustomTextField label={othertextItnput} onChange={onChange} id={otherInputId} /> : false}
        </>

    );

}




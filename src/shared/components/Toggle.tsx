import { Toggle } from "@fluentui/react";
import React from "react";
// import { useId, useBoolean } from '@fluentui/react-hooks';
import ComponenetProps from "../../modelsType/type/interface";
import "../../scssPages/form.scss"

// const dialogStyles = { main: { maxWidth: 450 } };
interface MyProps extends ComponenetProps {
  onText:string,
  defaultChecked:boolean
  nameOfClasStyle?:string
  offText:string
}

export const CustomToggle: React.FunctionComponent<MyProps>= (props) => {
  
  // const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  // const labelId: string = useId('dialogLabel');
  // const subTextId: string = useId('subTextLabel');
  
  const {onChange,id,onText,defaultChecked,nameOfClasStyle='toggle',offText}=props; 
  return (   
      <Toggle
      defaultChecked= {defaultChecked?true:undefined}
       onText={onText}
       offText={offText}
       onChange ={(ev: React.MouseEvent<HTMLElement>, checked?: boolean ) => {
      //  const className={nameOfClasStyle}
         onChange(id,checked )
    }} 
    />  
  );
};



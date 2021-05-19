import { ContextualMenu, Toggle } from "@fluentui/react";
import React from "react";
import { useId, useBoolean } from '@fluentui/react-hooks';
import ComponenetProps from "../../Models/ComponenetProps";

const dialogStyles = { main: { maxWidth: 450 } };
interface MyProps extends ComponenetProps {
  onText:string,
  defaultChecked:boolean
}

export const CustomToggle: React.FunctionComponent<MyProps>= (props) => {
  
  // const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  // const labelId: string = useId('dialogLabel');
  // const subTextId: string = useId('subTextLabel');
  
  const {onChange,id,onText,defaultChecked}=props;
  
  return (
    
      <Toggle
      defaultChecked= {defaultChecked?true:undefined}
       onText={onText}
       offText="" 
       onChange ={(ev: React.MouseEvent<HTMLElement>, checked?: boolean ) => {
        
         onChange(id,checked )
    }}
      
      />
     
  );
};



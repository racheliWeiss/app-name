import * as React from 'react';
import { Stack, IStackTokens, IStackStyles, TextField } from '@fluentui/react';
import ComponenetProps from '../../modelsType/type/interface';
import "../../scssPages/form.scss"

interface MyProps extends ComponenetProps {
    
  label: string
}


export const TextFeildNote: React.FunctionComponent<MyProps> = (props) => {
  const { onChange, label, id } = props;
  return (
    
      <TextField
          label={label} multiline rows={3} 
          className="note"
          onChange ={(e: any) => {
               onChange(id, e.currentTarget.value)
          }}
    
      // onChange={(e: any) => setLogin_entity_number(e.target.value)}
      />
    
  );

}



 



import * as React from 'react';
import { Stack, IStackTokens, IStackStyles, TextField } from '@fluentui/react';
import ComponenetProps from '../../Models/ComponenetProps';

interface MyProps extends ComponenetProps {
    
  label: string
}
const stackStyles: Partial<IStackStyles> = { root: { width: 934, height: 118 } };

export const TextFeildNote: React.FunctionComponent<MyProps> = (props) => {
  const { onChange, label, id } = props;
  return (
    <Stack styles={stackStyles}>
      <TextField
          label={label} multiline rows={3} 
          onChange ={(e: any) => {
               onChange(id, e.currentTarget.value)
          }}
    
      // onChange={(e: any) => setLogin_entity_number(e.target.value)}
      />
      </Stack>
  );

}



 



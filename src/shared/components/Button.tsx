import * as React from 'react';
import { Stack, IStackTokens, IStackStyles } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import ComponenetProps from '../../modelsType/type/interface';

export interface MyProps extends ComponenetProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked: boolean;
  text:string
}
const ButtomStyle: Partial<IStackStyles> = { root: { width: 120, height: 35 } };

export const ButtonDefault: React.FunctionComponent<MyProps> = props => {
  const {checked ,text,id,onChange} = props;

  return (
    <Stack styles={ButtomStyle}>
      <DefaultButton  
       text={text}
       onClick= {(ev: React.MouseEvent<HTMLElement>) => {
        onChange(id,ev.bubbles)
       }} 
       allowDisabledFocus 
        checked={checked} 
        /> 
    </Stack>
  );
};



function _alertClicked(): void {
  alert('Clicked');
}


export const ButtonPrimary: React.FunctionComponent<MyProps> = props => {
  const {checked ,text,id,onChange} = props;


  return (
    <Stack styles={ButtomStyle}>
      <PrimaryButton 
       text={text}
       onClick= {(ev: React.MouseEvent<HTMLElement>) => {
     
        onChange(id,ev.bubbles)
      }} 
       allowDisabledFocus 
        checked={checked} />
    </Stack>
  );
};





import * as React from 'react';
import { Dropdown, IDropdown } from '@fluentui/react/lib/Dropdown';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';

const dropdownStyles = { dropdown: { width: 300 } };

export const DropdownRequiredExample: React.FunctionComponent = () => {
  const dropdownRef = React.createRef<IDropdown>();
  const onSetFocus = () => dropdownRef.current!.focus(true);

  const stackTokens: IStackTokens = { childrenGap: 20 };
  
  return (
      <Stack horizontal tokens={stackTokens} verticalAlign="end">
        <Dropdown
          componentRef={dropdownRef}
          placeholder="Select an option"
          label="Required dropdown example"
          onChange={(e, selectedOption) => {
           console.log(e +""+selectedOption);
        }}
          options={[
            { key: 'A', text: 'Option a'},
            { key: 'B', text: 'Option b' },
            { key: 'C', text: 'Option c', },
            { key: 'D', text: 'Option d' },
            { key: 'E', text: 'Option e' },
          ]}
          required
          styles={dropdownStyles}
        />
       
    </Stack>
  );
};
// ,onclick:()=>console.log("i0i0")
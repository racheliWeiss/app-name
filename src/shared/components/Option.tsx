import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdown, IDropdownOption, IDropdownProps } from '@fluentui/react/lib/Dropdown';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import ComponenetProps from '../../Models/ComponenetProps'
import { useState } from 'react';
import { CustomTextField } from './TextField';
import { useTranslation } from 'react-i18next';

interface MyProps extends ComponenetProps {
  options: any;
  label: string
  selectedKey: any
  othertextInput: string,
  hasOtherValue:boolean
  otherInputId:any
}




const dropdownStyles = { dropdown: { width: 300 } };

export const CustomDropdown: React.FunctionComponent<MyProps> = (props) => {
  const [t, i18n] = useTranslation();
  const dropdownRef = React.createRef<IDropdown>();
  const onSetFocus = () => dropdownRef.current!.focus(true);

  const { onChange, options, label, selectedKey, id, othertextInput,hasOtherValue,otherInputId } = props;
  const [selected, setSelected] = useState<String | undefined>("");
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);

  const stackTokens: IStackTokens = { childrenGap: 20 };

  return (
    <Stack horizontal tokens={stackTokens} verticalAlign="end">
      <div>
        <Dropdown
          // componentRef={dropdownRef}
          // placeholder="Select an option"
          label={label}
          selectedKey={selectedKey}
          onChange={(e, selectedOption) => {
            debugger;
            console.log(e + "" + selectedOption);
            setSelected(selectedOption?.text);
            onChange(id, selectedOption?.key);
            let getSelectedIndex=options.findIndex((x:any)=>x.text==selectedOption?.text);
            setSelectedIndex(getSelectedIndex);
          }}
          options={options}
          required
          styles={dropdownStyles}

        ></Dropdown>
        {selectedIndex == options.length-1 && hasOtherValue ? <CustomTextField required={true} label={othertextInput} onChange={onChange} id={otherInputId} /> : false}

      </div>
    </Stack>
  );
};
// ,onclick:()=>console.log("i0i0")


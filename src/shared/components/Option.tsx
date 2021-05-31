import * as React from 'react';
import { Dropdown, IDropdown } from '@fluentui/react/lib/Dropdown';
import ComponenetProps from '../../Models/type/interface'
import { useState } from 'react';
import "../../scss/form.scss"
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




// const dropdownStyles = { dropdown: { width: 300 } };

export const CustomDropdown: React.FunctionComponent<MyProps> = (props) => {
  const [t, i18n] = useTranslation();
  const dropdownRef = React.createRef<IDropdown>();
  const onSetFocus = () => dropdownRef.current!.focus(true);

  const { onChange, options, label, selectedKey, id, othertextInput,hasOtherValue,otherInputId } = props;
  const [selected, setSelected] = useState<String | undefined>("");
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);
  return (
      <div>
        <Dropdown
          // componentRef={dropdownRef}
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
          className=" text-field"
          // styles={dropdownStyles}
        ></Dropdown>
        {selectedIndex == options.length-1 && hasOtherValue ? <CustomTextField required={true} label={othertextInput} onChange={onChange} id={otherInputId} /> : false}
      </div>   
  );
};
// ,onclick:()=>console.log("i0i0")



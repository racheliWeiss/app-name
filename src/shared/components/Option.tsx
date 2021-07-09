import * as React from 'react';
import { Dropdown, IDropdown } from '@fluentui/react/lib/Dropdown';
import ComponenetProps from '../../modelsType/type/interface'
import { useState } from 'react';
import "../../scssPages/form.scss"
import { CustomTextField } from './TextField';
import { useTranslation } from 'react-i18next';

interface MyProps extends ComponenetProps {
  options: any;
  label: string
  selectedKey: any
  othertextInput: string,
  hasOtherValue:boolean
  otherInputId:any
  readOnly ?:Boolean
}




// const dropdownStyles = { dropdown: { width: 300 } };

export const CustomDropdown: React.FunctionComponent<MyProps> = (props) => {
  const [t, i18n] = useTranslation();
  const dropdownRef = React.createRef<IDropdown>();
  const onSetFocus = () => dropdownRef.current!.focus(true);

  const {readOnly=false, onChange, options, label, selectedKey, id, othertextInput,hasOtherValue,otherInputId } = props;
  const [selected, setSelected] = useState<String | undefined>("");
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);
  return (
      <div>
        <Dropdown
          // componentRef={dropdownRef}
          label={label}
          selectedKey={selectedKey}
          onChange={(e, selectedOption) => {
            console.log(e + "" + selectedOption);
            setSelected(selectedOption?.text);
            onChange(id, selectedOption?.key);
            let getSelectedIndex=options.findIndex((x:any)=>x.text==selectedOption?.text);
            setSelectedIndex(getSelectedIndex);
          }}
          options={options}
          required
          className=" text-field"
          aria-readonly ={false}
          // styles={dropdownStyles}
        ></Dropdown>
        {selectedIndex == options.length-1 && hasOtherValue ? <CustomTextField  label={othertextInput} onChange={onChange} id={otherInputId} /> : false}
      </div>   
  );
};
// ,onclick:()=>console.log("i0i0")



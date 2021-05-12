import React from "react";
import '../scss/form.scss';
import Subheading from "./Subheading";
import { useTranslation } from 'react-i18next';
import { Calendar, DefaultButton, IContextualMenuItem, IContextualMenuProps, ITextFieldStyles, TextField } from "@fluentui/react";
import { useConst } from '@fluentui/react-hooks';
import { IStackProps, IStackStyles, Stack } from '@fluentui/react/lib/Stack';
import { Input } from "@material-ui/core";
import { DropdownRequiredExample } from "./Option";

const CustomerDetails = () => {
  const [t, i18n] = useTranslation();
  const stackTokens = { childrenGap: 50 };
  const stackStyles: Partial<IStackStyles> = { root: { width: 282, height: 32 } };
  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
  };
       

  return (
    // <div id="features">
      <div className="container-fluid">
        
         
          <Stack tokens={stackTokens} styles={stackStyles} >
            <Subheading
            title='לקוחות'/>
             {/* <ContextualMenuPersistedExample />
             <Calendar/> */}
             <DropdownRequiredExample/>
            {/* <Subheading title='לקוחות' /> */}
            <TextField
              required
              label={t("customer.Customer-status")}
            // onChange={(e: any) => setLogin_entity_number(e.target.value)}
            />
           
            <TextField
              required
              label={t("customer.last-name")}
            // onChange={(e: any) => setLogin_entity_number(e.target.value)}
            />
            <TextField
              required
              label={t("customer.first-name")}
            // onChange={(e: any) => setLogin_entity_number(e.target.value)}
            />
            

          </Stack>
        </div>
      
    // </div>
  )
}
export const ContextualMenuPersistedExample: React.FunctionComponent = () => {
  const [t, i18n] = useTranslation();
  
  const menuProps = useConst<IContextualMenuProps>(() => ({
    shouldFocusOnMount: true,
    shouldFocusOnContainer: true,
    items: [
      { key: 'male', text: t('male')},
      
    // onChange={(e: any) => setLogin_entity_number(e.target.value)}
    
      {key: 'female', text: t('female'), onClick: () => (<input />)},
      {key: 'other', text: t('other'), onClick: () => console.log('Rename clicked')}

    ],
  }));
   
  return <DefaultButton text="" persistMenu menuProps={menuProps} />;
};

export default CustomerDetails;

function handleChange(event: Event | undefined) {
  throw new Error("Function not implemented.");
}

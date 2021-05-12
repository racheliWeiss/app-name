import React from "react";
import '../scss/base.scss';
import Subheading from "./Subheading";
import { useTranslation } from 'react-i18next';
import { DefaultButton ,IContextualMenuItem,IContextualMenuProps,ITextFieldStyles,TextField} from "@fluentui/react";
import { useConst } from '@fluentui/react-hooks';
import { IStackProps, IStackStyles, Stack } from '@fluentui/react/lib/Stack';

const CustomerDetails = () => {
    const [t, i18n] = useTranslation();
    const stackTokens = { childrenGap: 50 };
    const stackStyles: Partial<IStackStyles> = { root: { width: 282 ,height:32 } };
    const columnProps: Partial<IStackProps> = {
      tokens: { childrenGap: 15 },
      styles: { root: { width: 300 } },
    };
// const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };
// const narrowTextFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 100 } };
// const stackTokens = { childrenGap: 15 };      

    return (
        <div >
        <ContextualMenuPersistedExample/>
        <Stack tokens={stackTokens}  styles={stackStyles} className='container-fluid'>

            {/* <Subheading title='לקוחות' /> */}
            
            <TextField

                className="p-2 bg "
                required
                label={t("customer.first-name")}

            // onChange={(e: any) => setLogin_entity_number(e.target.value)}
            />
            <TextField
                className="p-2 bg"
                required
                label={t("customer.last-name")}
            // onChange={(e: any) => setLogin_entity_number(e.target.value)}
            />
       </Stack>
       </div>
    )
}
export const ContextualMenuPersistedExample: React.FunctionComponent = () => {
    const menuProps = useConst<IContextualMenuProps>(() => ({
      shouldFocusOnMount: true,
      shouldFocusOnContainer: true,
      items: [
        { key: 'rename', text: 'Rename', onClick: () => console.log('Rename clicked') },

      ],
    }));
  
    return <DefaultButton text="Click for ContextualMenu" persistMenu menuProps={menuProps} />;
  };
  
export default CustomerDetails;

import React from 'react';
import { useConst } from '@fluentui/react-hooks';
import { DefaultButton, IContextualMenuProps } from '@fluentui/react';

   
  
export const ContextualMenuDefaultExample: React.FunctionComponent = () => {
    const menuProps = useConst<IContextualMenuProps>(() => ({
      shouldFocusOnMount: true,
      items: [
            { key: 'male', text: 'male' },
            
            { key: 'female',text: 'female'},
            { key: 'other', name: 'other',
            //    onClick: (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            //     alert('Link clicked');
            //     ev.preventDefault();
            //  },
            } 
          ],
        
        
    }));
  
    return <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} />;
  };
  
    
  
//   export default ContextualMenu ;
  
  

//   items: [
//     { key: 'male', text: 'male' },

//     // onChange={(e: any) => setLogin_entity_number(e.target.value)}

//     { key: 'female',text: 'female'},
//     { key: 'other', name: 'other',
//        onClick: (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
//         alert('Link clicked');
//         ev.preventDefault();
//      },
//     } 
//   ],


import React from 'react';

import Lable from '../App'
import { useTranslation } from 'react-i18next';

export function MyComponent(props:any) {
  
  const [t, i18n] = useTranslation();
  let lng = props.lang;
 


  return (
    <div style={{ textAlign: lng === "he" ? "right" : "left" }}>
 
     <p>{t('sigin')}</p>
    </div>
  );
};
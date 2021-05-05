import React from 'react';
import { Trans,useTranslation } from 'react-i18next'
import Lable from './App'
function MyComponent({ person, messages }) {
  const { name } = person;

  const count = messages.length;
  const { t } = useTranslation('myNamespace');


  return (
    <Trans i18nKey="<4>hhhh<5>" count={count}>
    {[
            Lable,
            closedTest,
            test1,
            <span>&nbsp;second&nbsp;</span>,
            <input key="input" />,
            <span key="third">third</span>
          ]}
       <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message.
       {/* <Link to="/msgs">Go to messages</Link>. */}
    </Trans>
  );
}
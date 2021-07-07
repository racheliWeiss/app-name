import { DefaultButton, IconButton, PrimaryButton } from '@fluentui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icons } from '../modelsType/Icon';
import '../scssPages/sub-header.scss';
import Title from '../shared/components/Title';
import '../scssPages/form.scss'
import { ICustomer } from './customerDetails/CustomerDetails';



export const SubHeader: React.FunctionComponent = () => {


  //translate hooks
  const [t, i18n] = useTranslation();

  return (
    <>
    <div className="sub-header">
      <Title
        title={t("customers")} />
      <div className="divider"></div>
      <PrimaryButton className='button' checked={false} text={t('createCustomer')} onClick={_alertClicked} iconProps={Icons.addFriend} />
      <DefaultButton className='button' checked={false} text={t('editing')} id={'Editing'} onClick={_alertClicked} iconProps={Icons.editContact} />
      <DefaultButton className='button' checked={false} iconProps={Icons.userRemove} text={t('deletion')} id={'Deletion'} onClick={_alertClicked} />
      <DefaultButton className='button' checked={false} text={t('save')} id={'Save'} onClick={_alertClicked} iconProps={Icons.cloudUpload} />
      <IconButton
        iconProps={Icons.pdf}
        styles={{
          icon: { color: 'red', fontSize: 36 }
        }}
        className="button"
      />
      <IconButton
        iconProps={Icons.print}
        styles={{
          icon: { color: 'black', fontSize: 36 }

        }}
        className="button"
      />
      <IconButton
        iconProps={Icons.print}
        styles={{
          icon: { color: 'black', fontSize: 36 }

        }}
        className="button"
      />
       <hr className="hr"></hr>
    </div>
    </>
  )
}

export default SubHeader;
//for example click
function _alertClicked(): void {
  alert('Clicked');
}

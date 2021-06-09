import { IconButton } from '@fluentui/react';
import react from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { ILogoutProps } from '../../modelsType/type/interface';

import { logout }from '../../store/actions/authActions'


export const Logout = ({ logout}:any)=>{

  const [t, i18n] = useTranslation();
  // const  handleLogout = ()=>{
  //   <Link to="/logut"></Link>
  // }
  return(
      <>
      <p className="logout">{t('logout')}</p>
          <IconButton
            onClick={logout}
            iconProps={{ iconName: 'NavigateBack' }}
            className="icon"
            styles={{
              icon: { color: 'white', fontSize: 24 },
              root: {
                selectors: {
                  ':hover .ms-Button-icon': {
                    color: '#FFB400'
                  },
                  ':active .ms-Button-icon': {
                    color: 'yellow'
                  }
                },
              },
              rootHovered: { backgroundColor: '1A1F71' },
              rootPressed: {backgroundColor:'1A1F71' }
            }}
          />
        {/* <PrimaryButton onClick={logout}
         text={'Logout'}
        /> */}   
      </>
    );
};

export default connect(null, { logout })(Logout);  
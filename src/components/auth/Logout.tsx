import { IconButton } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {logout1 } from '../../store/actions/authActions'


export const Logout = ()=>{
const dispatch = useDispatch()
  const [t, i18n] = useTranslation();
  const  handleLogout = () => {
    console.log('handleLogout')
    logout1(dispatch)
    // logout && logout()
  }
  return(
      <>
      <p className="logout">{t('logout')}</p>
          <IconButton
            onClick={handleLogout}
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

export default Logout  
import {IconButton, FontIcon } from '@fluentui/react';
import React from 'react';
// import styled from 'styled-components';
import  '../scss/header.scss';


const Header = () => {

    return (
        <>
        
         <div className="header">
         <div className="user">
             <p className="user-name">אלי ישראלי</p>
  
             <p className="logout">יציאה</p>
             <IconButton
        iconProps={{ iconName: 'NavigateBack'}}
        styles={{
          icon: { color:'white',fontSize: 24},
          root: { selectors: {
            ':hover .ms-Button-icon': {
              color: '#FFB400'
            },
            ':active .ms-Button-icon': {
                color: 'yellow'
              }
            },
           
        },
        rootHovered: {backgroundColor: '1A1F71'},
        // rootPressed: {backgroundColor: 'blue'}

        }}
        
      />
      </div>
      <div className='divider'></div>
      <div className="name-company">
      <p >InSight Systems 2.0</p>
      </div>
             {/* <FontIcon iconName="IncreaseIndentArrowMirrored" className="logoutIcon"/> */}
         </div>
        
        </>
       
    )


}

export default Header;
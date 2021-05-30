import { PrimaryButton } from '@fluentui/react';
import React, { Fragment } from 'react';
import react from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ILogoutProps } from '../../Models/type/interface';
import { logout }from '../../store/actions/authActions'


export const Logout = ({ logout }: ILogoutProps) => {
    return (
      <>
        <PrimaryButton onClick={logout}
         text={'Logout'}
        />
      </>
    );
  };


  export default connect(null, { logout })(Logout);  
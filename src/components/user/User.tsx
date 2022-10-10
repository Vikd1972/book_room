import React from 'react';
import { ToastContainer } from 'react-toastify';

import UserPhoto from './userPhoto/UserPhoto';
import UserInfo from './userInfo/UserInfo';
import UserPass from './userPass/UserPass';

import UserWrapper from './User.styled';

export const User: React.FC = () => {
  return (
    <UserWrapper>
      <UserPhoto />
      <div className='user-profile'>
        <UserInfo />
        <UserPass />
      </div>
      <ToastContainer
        className='toast'
        bodyClassName='toast-body' />
    </UserWrapper>
  );
}

export default User
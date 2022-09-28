import React from 'react';
import { useAppSelector } from '../../Store/hooks';

import UserProfile from './user.styled';

export const User: React.FC = () => {
  const isLogged = useAppSelector(state => state.books.isLogged) 

  return isLogged ? (
    <UserProfile>
      <div className='user'>
        User profile
      </div>
    </UserProfile>
  ) : null;
}

export default User
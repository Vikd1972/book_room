import React from 'react';

import UserProfile from './user.styled';

export const User: React.FC = () => {
  return (
    <UserProfile>
      <div className='user'>
        User profile
      </div>
    </UserProfile>
  );
}

export default User
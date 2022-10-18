import React from 'react';

import AuthorizePosterWrapper from './AuthorizePoster.styles';
import { Button } from '../componentsUI/button/Buttons';

export const AuthorizePoster: React.FC = () => {
  return (
    <AuthorizePosterWrapper>
      <div className='poster'>
        <div className='poster__image'></div>
        <div className='poster__field'>
          <div className='field-name'>Authorize now</div>
          <div className='field-text'>Authorize now and discover the fabulous<br />world of books</div>
          <form action="/login">
            <Button
              type='submit'
              className='button'
              text='Log In / Sing Up'
            />
          </form>
        </div>
      </div>
    </AuthorizePosterWrapper >
  );
}

export default AuthorizePoster
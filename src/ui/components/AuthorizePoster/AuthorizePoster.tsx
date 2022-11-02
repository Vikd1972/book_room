import React from 'react';

import { Button } from '../Button/Buttons';

import AuthorizePosterWrapper from './AuthorizePoster.styles';

export const AuthorizePoster: React.FC = () => {
  return (
    <AuthorizePosterWrapper>
      <div className="poster">
        <div className="poster__image" />
        <div className="poster__field">
          <h1 className="poster__field_name">Authorize now</h1>
          <p className="poster__field_text">Authorize now and discover the fabulous</p>
          <p className="poster__field_text">world of books</p>
          <form action="/login">
            <Button
              type="submit"
              className="button"
              text="Log In / Sing Up"
            />
          </form>
        </div>
      </div>
    </AuthorizePosterWrapper >
  );
};

export default AuthorizePoster;

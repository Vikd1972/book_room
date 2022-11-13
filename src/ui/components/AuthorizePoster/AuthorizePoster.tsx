import React from 'react';

import { Button } from '../Button/Buttons';

import castle from '../../assets/picture/castle.png';

import AuthorizePosterWrapper from './AuthorizePoster.styles';

export const AuthorizePoster: React.FC = () => {
  return (
    <AuthorizePosterWrapper>
      <div className="poster">
        <div className="poster__image">
          <img src={castle} alt="castle" />
        </div>
        <div className="poster__field">
          <h1 className="poster__field-name">Authorize now</h1>
          <div className="text-container">
            <p className="poster__field-text">Authorize now and discover
              the fabulous world of books
            </p>
          </div>
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

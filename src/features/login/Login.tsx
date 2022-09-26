import React from 'react';
import { Link } from "react-router-dom";

import LogIn from './Login.styled';

export const Login: React.FC = () => {

  return (
    <LogIn>
      <div className='login'>
        <div className='login__name'>
          <div>Log In /</div>
          <Link
            className="login__name-toggle"
            to="/sign">
            Sign Up
          </Link>
        </div>
        <form className='login__form'>
          <div className='login-form__input-width'>
            <div className='login-form__width-setter mail'>
              <input                
                type='text'
                placeholder='Email'/>
            </div>
          </div>
          <div className='login-form__input-name'>Enter your email</div>
          <div className='login-form__input-width'>
            <div className='login-form__width-setter hide'>
              <input
                type="password"
                placeholder='Password'/>
            </div>
          </div>
          <div className='login-form__input-name'>Enter your password</div>
          <button className='btn'>Log In</button>
        </form>
      </div>
      <div className='login-pic'></div>
      </LogIn>
  );
}

export default Login
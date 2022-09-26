import React from 'react';
import { Link } from "react-router-dom";
import SignUp from './Signup.styled';

export const Signup: React.FC = () => {
  return (
    <SignUp>
      <div className='login'>
        <div className='login__name'>
        <div>Sign Up /</div>
        <Link
          className="login__name-toggle"
          to="/login">
          Log In
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
          <div className='login-form__input-width'>
            <div className='login-form__width-setter hide'>
              <input
                type="password"
                placeholder='Password replay'/>
            </div>
          </div>
          <div className='login-form__input-name'>Repeat your password without errors</div>
          <button className='btn'>Sign Up</button>
        </form>
      </div>
      <div className='login-pic'></div>
    </SignUp>
  );
}

export default Signup
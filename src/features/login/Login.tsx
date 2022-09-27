import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import LogIn from './Login.styled';

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const savingEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const savingPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const sendingData = (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/login/", {
        email: email,
        pass: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        console.log(localStorage.getItem('token'));
      })
      .catch(function (err) {
        console.log(err.response);
      });
  }

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
        <form
          onSubmit={sendingData}
          className='login__form'>
          <div className='login-form__input-width'>
            <div className='login-form__width-setter mail'>
              <input    
                name="email"  
                type='text'
                onChange={savingEmail}
                value={email}
                placeholder='Email' />
            </div>
          </div>
          <div className='login-form__input-name'>Enter your email</div>
          <div className='login-form__input-width'>
            <div className='login-form__width-setter hide'>
              <input
                name="password"  
                type="password"
                onChange={savingPassword}
                value={password}
                placeholder='Password'/>
            </div>
          </div>
          <div className='login-form__input-name'>Enter your password</div>
          <button
            type='submit'
            className='btn'>
            Log In
          </button>
        </form>
      </div>
      <div className='login-pic'></div>
      </LogIn>
  );
}

export default Login
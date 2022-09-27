import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import { loginUser, loging } from '../../Store/booksSlice';
import { useAppDispatch } from '../../Store/hooks';

import SignUp from './Signup.styled';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const dispatch = useAppDispatch()

  const savingEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const savingPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const savingPasswordRepeat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(e.target.value)
  }

  const sendingData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      console.log('passwords differ');
    } else {
      axios
        .post("http://localhost:3001/api/auth/sign/", {
          email: email,
          pass: password,
        })
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          dispatch(
            loginUser({
              id: res.data.user.id,
              fullname: res.data.user.fullname,
              email: res.data.user.email,
            })
          );
          dispatch(
            loging(true)
          );
          setEmail('')
          setPassword('')  
          setPasswordRepeat('')  
        })
        .catch(function (err) {
          console.log(err.response);
        });
    }
  }

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
                placeholder='Email'/>
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
          <div className='login-form__input-width'>
            <div className='login-form__width-setter hide'>
              <input
                name="password" 
                type="password"
                onChange={savingPasswordRepeat}
                value={passwordRepeat}
                placeholder='Password replay'/>
            </div>
          </div>
          <div className='login-form__input-name'>Repeat your password without errors</div>
          <button
            type='submit'
            className='btn'>
            Sign Up
          </button>
        </form>
      </div>
      <div className='login-pic'></div>
    </SignUp>
  );
}

export default Signup
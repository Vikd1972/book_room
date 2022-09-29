import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { object, string } from 'yup';

import { loginUser, loging } from '../../Store/booksSlice';
import { useAppDispatch } from '../../Store/hooks';
import { SchemaLogin } from '../../validation/schemaType';

import LogIn from './Login.styled';

export const Login: React.FC = (props) => {
  const dispatch = useAppDispatch()

  let navigate = useNavigate();
  let location = useLocation();
  
  const { from } = location.state || { from: { path: "/" } };
  const route = JSON.stringify(from.path).split('').map(item => item === '"' ? null : item).join('');

  interface Values {
    email: string;
    password: string;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as Values,
    validationSchema: object().shape({
      email: string().email('must be a valid email').required('Required email'),
      password: string().min(8, 'must be at least 8 characters long').required('Required password'),
    }) as SchemaLogin,
    onSubmit: values => {      
      axios
        .post("http://localhost:3001/api/auth/login/", {
          email: values.email,
          pass: values.password,
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
          navigate(route)
        })
        .catch(function (err) {
          console.log(err.response);
          dispatch(
            loging(false)
          );
        });
    },
  });

  return (
    <LogIn>
      <div className='login'>
        <div className='login__name'>
          <div>Log In /</div>
          <Link
            className="login__name-toggle"
            state={{ from: from }}
            to="/sign">
            Sign Up
          </Link>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className='login__form'>
          <div className='login-form__input-width'> 
            <div className="login-form__width-setter mail">
              <input   
                type="email"
                autoComplete="on"
                placeholder='Email'
                {...formik.getFieldProps('email')}
              />
            </div>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className = 'login-form__input-name err'>{formik.errors.email}</div>
          ) : (
            <div className='login-form__input-name'>Enter your email</div>
          )}
          <div className='login-form__input-width'>
            <div className='login-form__width-setter hide'>
              <input
                type="password"
                autoComplete="on"
                placeholder='Password'
                {...formik.getFieldProps('password')}
              />
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className='login-form__input-name err'>{formik.errors.password}</div>
          ) : (
            <div className='login-form__input-name'>Enter your password</div>
          )}
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
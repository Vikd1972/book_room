import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { loginUser, loging } from '../../Store/usersSlice';
import { useAppDispatch } from '../../Store/hooks';
import showToast from '../../Validation/showToast';
import instance from '../../Api';
import schemqaLogin from '../../Validation/schemaLogin';
import { Values } from '../../Interfaces/Interface';
import InputAuth from '../inputAuth/InputAuth';

import LogIn from './Login.styled';


export const Login: React.FC = (props) => {
  const dispatch = useAppDispatch()

  let navigate = useNavigate();
  let location = useLocation();

  const { from } = location.state || { from: { path: "/" } };
  const route = JSON.stringify(from.path).split('').map(item => item === '"' ? null : item).join('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as Values,
    validationSchema: schemqaLogin,
    onSubmit: values => {
      instance
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
          showToast(err.response.data.message);
          console.log(err.response.data.message);
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
          <InputAuth
            type='email'
            placeholder='Email'
            formikName={formik.touched.email}
            formikError={formik.errors.email}
            formikField={formik.getFieldProps('email')}
            icon='mail'
          />
          <InputAuth
            type='password'
            placeholder='Password'
            formikName={formik.touched.password}
            formikError={formik.errors.password}
            formikField={formik.getFieldProps('password')}
            icon='hide'
          />
          <button
            type='submit'
            className='btn'>
            Log In
          </button>
        </form>
      </div>
      <div className='login-pic'></div>
      <ToastContainer
        className='toast'
        bodyClassName='toast-body' />
    </LogIn>
  );
}

export default Login
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import authUser from '../../api/authUser';
import { loginUser } from '../../store/usersSlice';
import { useAppDispatch } from '../../store/hooks';

import schemqaLogin from '../../validation/schemaLogin';
import { Values } from '../../interfaces/Interface';
import InputAuth from '../componentsUI/inputOneLine/InputOneLine';
import { ButtonSubmit } from '../componentsUI/button/Buttons';
import { UserType } from '../../store/usersSlice';

import LoginWrapper from './Login.styles';
import { string } from 'yup';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const route = location.state as string || '/' ;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as Values,
    validationSchema: schemqaLogin,
    onSubmit: async (values) => {
      try {
        const user: UserType = await authUser(values)
        dispatch(loginUser(user));
        navigate(route)
      }
      catch(err) {
        console.log(err); 
      }
    },
  });

  return (
    <LoginWrapper>
      <div className='login'>
        <div className='login__name'>
          <div>Log In /</div>
          <Link
            className="login__name-toggle"
            to="/signup">
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
          <ButtonSubmit
            className="btn"
            text='Log In'
          />
        </form>
      </div>
      <div className='login-pic'></div>
      <ToastContainer
        className='toast'
        bodyClassName='toast-body' />
    </LoginWrapper>
  );
}

export default Login
import React from 'react';
import { useFormik } from 'formik';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import authUser from '../../api/authUser';
import { loginUser } from '../../store/usersSlice';
import { useAppDispatch } from '../../store/hooks';
import showToast from '../../validation/showToast';
import schemqaLogin from '../../validation/schemaLogin';
import { Values } from '../../interfaces/Interface';
import InputOneLine from '../componentsUI/inputOneLine/InputOneLine';
import { Button } from '../componentsUI/button/Buttons';
import { UserType } from '../../store/usersSlice';

import LoginWrapper from './Login.styles';

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
        if (err instanceof AxiosError) {
          showToast(err.response?.data.message);          
        }
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
          <InputOneLine
            type='email'
            placeholder='Email'
            textWhenChanged='Enter your email'
            formikName={formik.touched.email}
            formikError={formik.errors.email}
            formikField={formik.getFieldProps('email')}
            icon='mail'
          />
          <InputOneLine
            type='password'
            placeholder='Password'
            textWhenChanged='Enter your password'
            formikName={formik.touched.password}
            formikError={formik.errors.password}
            formikField={formik.getFieldProps('password')}
            icon='hide'
          />
          <Button
            type='submit'
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
import React from 'react';
import { useFormik } from 'formik';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import authUser from '../../api/authUser';
import { loginUser } from '../../store/usersSlice';
import { useAppDispatch } from '../../store/hooks';

import schemqaLogin from '../../validation/schemaLogin';
import { Values } from '../../interfaces/Interface';
import InputAuth from '../componentsUI/inputAuth/InputAuth';
import { ButtonSubmit } from '../componentsUI/button/Buttons';

import LogIn from './Login.styled';


export const Login: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const route = location.state || '/';  

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as Values,
    validationSchema: schemqaLogin,
    onSubmit: async (values) => {
      const user = await authUser({ values })
      dispatch(loginUser(user));
      console.log(route);
      
      navigate(route)
    },
  });

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
            // width='151px'
            text='Log In'
            className="test"
          />
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
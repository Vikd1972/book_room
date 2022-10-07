import React from 'react';
import { useFormik } from 'formik';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import authUser from '../../Api/authUser';
import { loginUser, loging } from '../../Store/usersSlice';
import { useAppDispatch } from '../../Store/hooks';

import schemqaLogin from '../../Validation/schemaLogin';
import { Values } from '../../Interfaces/Interface';
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
      dispatch(
        loginUser({
          id: user.id,
          fullname: user.fullname,
          email: user.email,
          photoFilePath: `http://localhost:3001/uploads/${user.photoFilePath}`,
        })
      );
      dispatch(
        loging(true)
      );
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
            width='151px'
            text='Log In'
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
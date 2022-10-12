import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import signUser from '../../api/signUpUser';
import { loginUser, UserType } from '../../store/usersSlice';
import { useAppDispatch } from '../../store/hooks';
import schemaSign from '../../validation/schemaSign';
import { Values } from '../../interfaces/Interface';
import { ButtonSubmit } from '../componentsUI/button/Buttons';
import InputAuth from '../componentsUI/inputOneLine/InputOneLine';

import SignUpWrapper from './Signup.styles';

export const Signup: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const route = location.state as string || '/';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as Values,
    validationSchema: schemaSign,
    onSubmit: async (values) => {
      try {
        const user: UserType = await signUser(values)
        dispatch(loginUser(user));
        navigate(route)
      }
      catch (err) {
        console.log(err);        
      }
    },
  });

  return (
    <SignUpWrapper>
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
          <InputAuth
            type='password'
            placeholder='Confirm password'
            formikName={formik.touched.confirmPassword}
            formikError={formik.errors.confirmPassword}
            formikField={formik.getFieldProps('confirmPassword')}
            icon='hide'
          />
          <ButtonSubmit
            width='151px'
            text='Sign Up'
          />
        </form>
      </div>
      <div className='login-pic'></div>
      <ToastContainer />
    </SignUpWrapper>
  );
}

export default Signup
import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import signUser from '../../Api/signUser';
import { loginUser, loging } from '../../Store/usersSlice';
import { useAppDispatch } from '../../Store/hooks';
import schemaSign from '../../Validation/schemaSign';
import { Values } from '../../Interfaces/Interface';
import { ButtonSubmit } from '../componentsUI/button/Buttons';
import InputAuth from '../componentsUI/inputAuth/InputAuth';

import SignUp from './Signup.styled';

export const Signup: React.FC = (props) => {
  const dispatch = useAppDispatch()

  let navigate = useNavigate();
  let location = useLocation();

  const { from } = location.state || { from: { path: "/" } };
  const route = JSON.stringify(from.path).split('').map(item => item === '"' ? null : item).join('')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as Values,
    validationSchema: schemaSign,
    onSubmit: async (values) => {
      const user = await signUser({ values })
      dispatch(
        loginUser({
          id: user.id,
          fullname: user.fullname,
          email: user.email,
        })
      );
      dispatch(
        loging(true)
      );
      navigate(route)
    },
  });

  return (
    <SignUp>
      <div className='login'>
        <div className='login__name'>
          <div>Sign Up /</div>
          <Link
            className="login__name-toggle"
            state={{ from: from }}
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
    </SignUp>
  );
}

export default Signup
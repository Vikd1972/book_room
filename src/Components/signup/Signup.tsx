import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { object, string } from 'yup';
import { ToastContainer } from 'react-toastify';

import { loginUser, loging } from '../../Store/usersSlice';
import { useAppDispatch } from '../../Store/hooks';
import schemaSign from '../../Validation/schemaSign';
import showToast from '../../Validation/showToast';
import instance from '../../Api';
import { Values } from '../../Interfaces/Interface';
import InputAuth from '../inputAuth/InputAuth';

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
    onSubmit: values => {
      if (values.password !== values.confirmPassword) {
        showToast('passwords do not match');
      } else {
        instance
          .post("http://localhost:3001/api/auth/sign/", {
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
            console.log(err.response);
            dispatch(
              loging(false)
            );
          })
      }
    }
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
          <button
            type='submit'
            className='btn'>
            Sign Up
          </button>
        </form>
      </div>
      <div className='login-pic'></div>
      <ToastContainer />
    </SignUp>
  );
}

export default Signup
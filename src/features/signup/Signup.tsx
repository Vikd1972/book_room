import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { object, string } from 'yup';
import { ToastContainer } from 'react-toastify';

import { loginUser, loging } from '../../Store/booksSlice';
import { useAppDispatch } from '../../Store/hooks';
import { SchemaSign } from '../../validation/schemaType';
import showToast from '../../validation/showToast';
import instance from '../../middleware/inteceptor';

import SignUp from './Signup.styled';

export const Signup: React.FC = (props) => {
  const dispatch = useAppDispatch()

  let navigate = useNavigate();
  let location = useLocation();

  const { from } = location.state || { from: { path: "/" } };
  const route = JSON.stringify(from.path).split('').map(item => item === '"' ? null : item).join('')

  interface Values {
    email: string;
    password: string;
    confirmPassword: string;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as Values,
    validationSchema: object().shape({
      email: string().email('must be a valid email').required('Required email'),
      password: string().min(3, 'must be at least 3 characters long').required('Required password'),
      confirmPassword: string().min(3, 'must be at least 3 characters long').required('Required confirm password'),
    }) as SchemaSign,
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
          <div className='login-form__input-width'>
            <div className='login-form__width-setter mail'>
              <input
                type="email"
                autoComplete="on"
                placeholder='Email'
                {...formik.getFieldProps('email')}
              />
            </div>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className='login-form__input-name err'>{formik.errors.email}</div>
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
          <div className='login-form__input-width'>
            <div className='login-form__width-setter hide'>
              <input
                type="password"
                autoComplete="on"
                placeholder='Confirm password'
                {...formik.getFieldProps('confirmPassword')}
              />
            </div>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className='login-form__input-name err'>{formik.errors.confirmPassword}</div>
          ) : (
            <div className='login-form__input-name'>Repeat your password without errors</div>
          )}
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
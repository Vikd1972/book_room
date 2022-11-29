/* eslint-disable no-console */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import authUser from '../../../api/auth/authUser';
import { loginUser, setFavorites, setCart } from '../../../store/usersSlice';
import { getCartThunk } from '../../../store/usersThunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import showToast from '../../../validation/showToast';
import schemqaLogin from '../../../validation/schemaLogin';
import type { IValues } from '../User/Interface';
import InputOneLine from '../../components/InputOneLine/InputOneLine';
import Input from '../../components/Input/Input';
import { Button } from '../../components/Button/Buttons';

import man from '../../assets/picture/men1.png';

import LoginWrapper from './Login.styles';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = useAppSelector((state) => state.books.queryString);
  const route = location.state as string || `/${queryString}`;
  const [isChange, setIsChange] = useState(false);

  const changeField = () => {
    setIsChange(true);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as IValues,
    validationSchema: schemqaLogin,
    onSubmit: async (values) => {
      try {
        const userInfo = await authUser(values);
        dispatch(loginUser(userInfo.user));
        dispatch(setCart(userInfo.userCart));
        setIsChange(false);
        navigate(route);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.response?.data.message);
        }
      }
    },
  });

  return (
    <LoginWrapper>
      <div className="login">
        <div className="login__name">
          <div>Log In /</div>
          <Link
            className="login__name-toggle"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="login__form"
        >
          <InputOneLine
            type="email"
            placeholder="Email"
            textWhenChanged="Enter your email"
            formikName={formik.touched.email}
            formikError={formik.errors.email}
            formikField={formik.getFieldProps('email')}
            icon="mail"
          />
          <InputOneLine
            type="password"
            placeholder="Password"
            textWhenChanged="Enter your password"
            formikName={formik.touched.password}
            formikError={formik.errors.password}
            formikField={formik.getFieldProps('password')}
            icon="hide"
          />
          <Input
            type="email"
            textInfo="Enter your email"
            textWhenChanged="`Enter your email"
            field="er@erer.com"
            placeholder="Enter your email"
            formikName={formik.touched.email}
            formikError={formik.errors.email}
            formikField={formik.getFieldProps('email')}
            icon="mail"
            changeFieldAuth={isChange}
            onClick={changeField}
          />
          <Button
            type="submit"
            className="button"
            text="Log In"
          />
        </form>
      </div>
      <div className="login-image">
        <img src={man} alt="man" />
      </div>
      <ToastContainer
        className="toast"
        bodyClassName="toast-body"
      />
    </LoginWrapper>
  );
};

export default Login;

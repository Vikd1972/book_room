import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import signUser from '../../../api/auth/signUpUser';
import { loginUser } from '../../../store/usersSlice';
import type { IUserType } from '../../../store/usersSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import showToast from '../../../validation/showToast';
import schemaSign from '../../../validation/schemaSign';
import type { IValues } from '../User/Interface';
import InputOneLine from '../../components/InputOneLine/InputOneLine';
import { Button } from '../../components/Button/Buttons';

import SignUpWrapper from './Signup.styles';

export const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = useAppSelector((state) => state.books.queryString);
  const route = location.state as string || `/${queryString}`;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as IValues,
    validationSchema: schemaSign,
    onSubmit: async (values) => {
      try {
        const user: IUserType = await signUser(values);
        dispatch(loginUser(user));
        navigate(route);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.response?.data.message);
        }
      }
    },
  });

  return (
    <SignUpWrapper>
      <div className="login">
        <div className="login__name">
          <div>Sign Up /</div>
          <Link
            className="login__name-toggle"
            to="/login"
          >
            Log In
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
          <InputOneLine
            type="password"
            placeholder="Confirm password"
            textWhenChanged="Replay your password"
            formikName={formik.touched.confirmPassword}
            formikError={formik.errors.confirmPassword}
            formikField={formik.getFieldProps('confirmPassword')}
            icon="hide"
          />
          <Button
            type="submit"
            className="button"
            text="Sign Up"
          />
        </form>
      </div>
      <div className="login-image" />
      <ToastContainer
        className="toast"
        bodyClassName="toast-body"
      />
    </SignUpWrapper>
  );
};

export default Signup;

/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import changeUserData from '../../../../api/users/changeUserData';
import { Button } from '../../../components/Button/Buttons';
import Input from '../../../components/Input/Input';
import type { IValues } from '../Interface';
import { loginUser } from '../../../../store/usersSlice';
import type { IUserType } from '../../../../store/usersSlice';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import schemaUser from '../../../../validation/schemaUser';
import showToast from '../../../../validation/showToast';

import userIcon from '../../../assets/picture/user.png';
import mailIcon from '../../../assets/picture/mail.png';

import UserInfoWrapper from './UserInfo.styles';

export const UserInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);
  const [isChange, setIsChange] = useState(true);

  const onIsChange = () => {
    setIsChange(false);
  };

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
    } as IValues,
    validationSchema: schemaUser,
    onSubmit: async (values) => {
      try {
        if (values.fullname || values.email) {
          const user: IUserType = await changeUserData(values);
          dispatch(loginUser(user));
        }
        formik.resetForm();
        setIsChange(true);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.response?.data.message);
        }
      }
    },
  });

  return (
    <UserInfoWrapper>
      <form
        className="user__info"
        onSubmit={formik.handleSubmit}
      >
        <div className="user__info-title">
          <div className="title-name">Personal information</div>
          <div
            className="title-button"
            onClick={onIsChange}
          >Change information
          </div>
        </div>
        <div className="user__info-inputs">
          <Input
            type="text"
            textInfo="Your name"
            textWhenChanged={`Your name now is ${user.fullname ? user.fullname : '...'}. Enter new name`}
            field={user.fullname}
            placeholder="Enter your name"
            formikName={formik.touched.fullname}
            formikError={formik.errors.fullname}
            formikField={formik.getFieldProps('fullname')}
            icon={userIcon}
            isAuth={false}
            changeField={isChange}
            changeFieldAuth={false}
          />
          <Input
            type="email"
            textInfo="Your email"
            textWhenChanged={`Your email now is ${user.email}. Enter new email`}
            field={user.email}
            placeholder="Enter your email"
            formikName={formik.touched.email}
            formikError={formik.errors.email}
            formikField={formik.getFieldProps('email')}
            icon={mailIcon}
            isAuth={false}
            changeField={isChange}
            changeFieldAuth={false}
          />
        </div>
        {!isChange
          ? (<Button
            type="submit"
            className="button"
            text="Confirm"
          />)
          : null
        }
      </form>
      <ToastContainer
        className="toast"
        bodyClassName="toast-body"
      />
    </UserInfoWrapper>
  );
};

export default UserInfo;

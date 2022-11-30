import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import changeUserData from '../../../../api/users/changUserData';
import { Button } from '../../../components/Button/Buttons';
import Input from '../../../components/Input/Input';
import type { IValues } from '../Interface';
import { loginUser } from '../../../../store/usersSlice';
import type { IUserType } from '../../../../store/usersSlice';
import { useAppDispatch } from '../../../../store/hooks';
import schemaUser from '../../../../validation/schemaUser';
import showToast from '../../../../validation/showToast';

import hideIcon from '../../../assets/picture/hide.png';

import UserPassWrapper from './UserPass.styles';

export const UserPass: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isChange, setIsChange] = useState(true);

  const onIsChange = () => {
    setIsChange(false);
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    } as IValues,
    validationSchema: schemaUser,
    onSubmit: async (values) => {
      try {
        if (values.oldPassword && values.newPassword && values.confirmPassword) {
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
    <UserPassWrapper>
      <form
        className="user__info"
        onSubmit={formik.handleSubmit}
      >
        <div className="user__info-title">
          <div className="title-name">Password</div>
          <div className="title-button"
            onClick={onIsChange}
          >Change password
          </div>
        </div>
        <Input
          type="password"
          textInfo="Your password"
          textWhenChanged="Old password"
          field="****************"
          placeholder="Enter old password"
          formikName={formik.touched.oldPassword}
          formikError={formik.errors.oldPassword}
          formikField={formik.getFieldProps('oldPassword')}
          icon={hideIcon}
          changeField={isChange}
        />
        {!isChange ? (
          <>
            <Input
              type="password"
              placeholder="New password"
              textWhenChanged="Enter new password"
              formikName={formik.touched.newPassword}
              formikError={formik.errors.newPassword}
              formikField={formik.getFieldProps('newPassword')}
              changeField={isChange}
              icon={hideIcon}
            />
            <Input
              type="password"
              textWhenChanged="Replay new password"
              placeholder="Confirm password"
              formikName={formik.touched.confirmPassword}
              formikError={formik.errors.confirmPassword}
              formikField={formik.getFieldProps('confirmPassword')}
              icon={hideIcon}
            />
          </>
        ) : (
          null
        )}

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
    </UserPassWrapper>
  );
};

export default UserPass;

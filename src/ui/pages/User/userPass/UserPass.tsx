import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import changeUserData from '../../../../api/users/changUserData';
import { Button } from '../../../components/Button/Buttons';
import InputOneLine from '../../../components/InputOneLine/InputOneLine';
import InputTwoLine from '../../../components/InputTwoLine/InputTwoLine';
import type { IValues } from '../Interface';
import { loginUser } from '../../../../store/usersSlice';
import type { IUserType } from '../../../../store/usersSlice';
import { useAppDispatch } from '../../../../store/hooks';
import schemaUser from '../../../../validation/schemaUser';
import showToast from '../../../../validation/showToast';

import UserPassWrapper from './UserPass.styles';

export const UserPass: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isChange, setIsChange] = useState(false);

  const onIsChange = () => {
    setIsChange(true);
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
        const user: IUserType = await changeUserData(values);
        dispatch(loginUser(user));
        formik.resetForm();
        setIsChange(false);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.response?.data.message);
        }
      }
    },
  });

  return (
    <UserPassWrapper>
      <div className="user">
        <form
          onSubmit={formik.handleSubmit}
        >
          <div className="user__info">
            <div className="user__info-password">
              <div className="text">
                <div className="text-name">Password</div>
                <div className="text-btn"
                  onClick={onIsChange}
                >Change password
                </div>
              </div>
              <div className="info">
                <InputTwoLine
                  type="password"
                  textInfo="Your password"
                  textWhenChanged="Old password"
                  field="****************"
                  placeholder="Enter old password"
                  formikName={formik.touched.oldPassword}
                  formikError={formik.errors.oldPassword}
                  formikField={formik.getFieldProps('oldPassword')}
                  icon="hide"
                  changeField={isChange}
                />
              </div>
              {isChange ? (
                <>
                  <InputOneLine
                    type="password"
                    placeholder="New password"
                    textWhenChanged="Enter new password"
                    formikName={formik.touched.newPassword}
                    formikError={formik.errors.newPassword}
                    formikField={formik.getFieldProps('newPassword')}
                    changeField={isChange}
                    icon="hide"
                  />
                  <InputOneLine
                    type="password"
                    textWhenChanged="Replay new password"
                    placeholder="Confirm password"
                    formikName={formik.touched.confirmPassword}
                    formikError={formik.errors.confirmPassword}
                    formikField={formik.getFieldProps('confirmPassword')}
                    icon="hide"
                    changeField={isChange}
                  />
                </>
              ) : (
                null
              )}
            </div>
          </div>
          {isChange
            ? (<Button
              type="submit"
              className="button"
              text="Confirm"
            />)
            : null
          }
        </form>
      </div>
      <ToastContainer
        className="toast"
        bodyClassName="toast-body"
      />
    </UserPassWrapper>
  );
};

export default UserPass;

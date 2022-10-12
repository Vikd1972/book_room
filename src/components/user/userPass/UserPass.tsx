import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';

import changeUserData from '../../../api/changUserData';
import { useAppDispatch } from '../../../store/hooks';
import schemaUser from '../../../validation/schemaUser';
import { loginUser } from '../../../store/usersSlice';
import { Values } from '../../../interfaces/Interface';
import InputUserInfo from '../../componentsUI/inputTwoLine/InputTwoLine';
import { ButtonSubmit } from '../../componentsUI/button/Buttons';
import { UserType } from '../../../store/usersSlice';

import UserPassWrapper from './UserPass.styles';

export const UserPass: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const [isChange, setIsChange] = useState(false);

  const onIsChange = () => {
    setIsChange(true)
  }

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    } as Values,
    validationSchema: schemaUser,
    onSubmit: async (values) => {
      try {
        const user: UserType = await changeUserData(values);
        dispatch(loginUser(user));
        formik.resetForm();
        setIsChange(false);
      }
      catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <UserPassWrapper>
      <div className='user'>
        <form
          onSubmit={formik.handleSubmit}>
          <div className='user__info'>
            <div className='user__info-password'>
              <div className='text'>
                <div className='text-name'>Password</div>
                <div className='text-btn'
                  onClick={onIsChange}>
                  Change password</div>
              </div>
              <div className='info'>
                <InputUserInfo
                  type='password'
                  textInfo='Your password'
                  textWhenChanged='Old password'
                  field='*****************'
                  placeholder='Enter old password'
                  formikName={formik.touched.oldPassword}
                  formikError={formik.errors.oldPassword}
                  formikField={formik.getFieldProps('oldPassword')}
                  icon='hide'
                  changeField={isChange}
                />
              </div>
              {isChange ? (
                <>
                  <InputUserInfo
                    type='password'
                    textInfo='New password'
                    textWhenChanged='Enter new password'
                    placeholder='New password'
                    formikName={formik.touched.newPassword}
                    formikError={formik.errors.newPassword}
                    formikField={formik.getFieldProps('newPassword')}
                    icon='hide'
                    changeField={isChange}
                  />
                  <InputUserInfo
                    type='password'
                    textInfo='Replay password'
                    textWhenChanged='Replay new password'
                    placeholder='Confirm password'
                    formikName={formik.touched.confirmPassword}
                    formikError={formik.errors.confirmPassword}
                    formikField={formik.getFieldProps('confirmPassword')}
                    icon='hide'
                    changeField={isChange}
                  />
                </>
              ) : (
                null
              )}
            </div>
          </div>
          {isChange ? (
            <div className='btn'>
              <ButtonSubmit
                width='170px'
                text='Confirm'
              />
            </div>
          ) :
            null
          }
        </form>
      </div>
      <ToastContainer
        className='toast'
        bodyClassName='toast-body' />
    </UserPassWrapper>
  );
}

export default UserPass
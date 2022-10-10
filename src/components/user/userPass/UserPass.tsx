import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';

import changeUserData from '../../../api/changUserData';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import schemaUser from '../../../validation/schemaUser';
import { loginUser } from '../../../store/usersSlice';
import { Values } from '../../../interfaces/Interface';
import InputUserInfo from '../../componentsUI/inputUserInfo/InputUserInfo';
import { ButtonSubmit } from '../../componentsUI/button/Buttons';


import UserPassWrapper from './UserPass.styles';

export const UserPass: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.users.user)
  const [isChangeInfo, setisChangeInfo] = useState(false);
  const [isChangePass, setisChangePass] = useState(false);

  const output = document.getElementById('output') as HTMLImageElement;


  const onIsChangePass = () => {
    setisChangePass(true)
  }

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    } as Values,
    validationSchema: schemaUser,
    onSubmit: async (values) => {
      const user = await changeUserData({ values })
      dispatch(
        loginUser({
          id: user.id,
          fullname: user.fullname,
          email: user.email,
          photoFilePath: `http://localhost:3001/uploads/${user.photoFilePath}`,
        })
      );
      formik.resetForm()
      setisChangeInfo(false)
      setisChangePass(false)
    },
  });

  return (
    <UserPassWrapper>
      <div className='user'>
        <form
          onSubmit={formik.handleSubmit}>
          <div className='user__info'>
            {/* <div className='user__info-personal'>          </div> */}
            <div className='user__info-password'>
              <div className='text'>
                <div className='text-name'>Password</div>
                <div className='text-btn'
                  onClick={onIsChangePass}>
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
                  changeField={isChangePass}
                />
              </div>
              {isChangePass ? (
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
                    changeField={isChangePass}
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
                    changeField={isChangePass}
                  />
                </>
              ) : (
                null
              )}
            </div>
          </div>
          {isChangeInfo || isChangePass ? (
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
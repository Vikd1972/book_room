import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';

import changeUserData from '../../../api/changUserData';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import schemaUser from '../../../validation/schemaUser';
import { loginUser } from '../../../store/usersSlice';
import { Values } from '../../../interfaces/Interface';
import InputUserInfo from '../../componentsUI/inputTwoLine/InputTwoLine';
import { ButtonSubmit } from '../../componentsUI/button/Buttons';
import UserInfoWrapper from './UserInfo.styles';

export const UserInfo: React.FC = () => {  
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.users.user)
  const [isChange, setIsChange] = useState(false);

  const onIsChange = () => {
    setIsChange(true)
  }

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
    } as Values,
    validationSchema: schemaUser,
    onSubmit: async (values) => {      
      try {
        const user = await changeUserData(values);
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
    <UserInfoWrapper>
      <form onSubmit={formik.handleSubmit}>
        <div className='user__info'>
          <div className='text'>
            <div className='text-name'>Personal information</div>
            <div
              className='text-btn'
              onClick={onIsChange}>
              Change information</div>
          </div>
          <div className='info'>
            <InputUserInfo
              type='text'
              textInfo='Your name'
              textWhenChanged={`Your name now is ${user.fullname}. Enter new name`}
              field={user.fullname}
              placeholder='Enter your name'
              formikName={formik.touched.fullname}
              formikError={formik.errors.fullname}
              formikField={formik.getFieldProps('fullname')}
              icon='user'
              changeField={isChange}
            />
            <InputUserInfo
              type='email'
              textInfo='Your email'
              textWhenChanged={`Your email now is ${user.email}. Enter new email`}
              field={user.email}
              placeholder='Enter your email'
              formikName={formik.touched.email}
              formikError={formik.errors.email}
              formikField={formik.getFieldProps('email')}
              icon='mail'
              changeField={isChange}
            />
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
      <ToastContainer
        className='toast'
        bodyClassName='toast-body' />
    </UserInfoWrapper>
  );
}

export default UserInfo
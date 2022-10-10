import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';

import changeUserData from '../../api/changUserData';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import schemaUser from '../../validation/schemaUser';
import { loginUser } from '../../store/usersSlice';
import { Values } from '../../interfaces/Interface';
import { ButtonSubmit } from '../componentsUI/button/Buttons';
import photo from '../../utils/picture/user_photo.png'
import UserPhoto from './userPhoto/UserPhoto';
import UserInfo from './userInfo/UserInfo';
import UserPass from './userPass/UserPass';

import UserProfile from './User.styled';


export const User: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.users.user)
  const [isChangeInfo, setisChangeInfo] = useState(false);
  const [isChangePass, setisChangePass] = useState(false);

  let user_Photo = user.photoFilePath?.endsWith('png') ? user.photoFilePath : photo;
  const output = document.getElementById('output') as HTMLImageElement;

  const onIsChangeInfo = () => {
    setisChangeInfo(true)
  }

  const onIsChangePass = () => {
    setisChangePass(true)
  }

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
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
    <UserProfile>
      <div className='user'>
        <UserPhoto />
        <div className='user-profile'>
          <form>
            <div className='user__info'>
              <UserInfo />
              <UserPass />
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
      </div>
      <ToastContainer
        className='toast'
        bodyClassName='toast-body' />
    </UserProfile>
  );
}

export default User
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';

import changeUserData from '../../Api/changUserData';
import { useAppSelector, useAppDispatch } from '../../Store/hooks';
import schemaUser from '../../Validation/schemaUser';
import { loginUser } from '../../Store/usersSlice';
import { Values } from '../../Interfaces/Interface';
import InputUserInfo from '../componentsUI/inputUserInfo/InputUserInfo';
import { ButtonSubmit } from '../componentsUI/button/Buttons';
import photo from '../../Utils/picture/user_photo.png'
import uploadPhoto from '../../Api/uploadPhoto';

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

  const sendingImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const reader = new FileReader();
        reader.onload = async () => {
          if (!reader.result) {
            console.log('error');
          };
          const photo = reader.result as string;
          const user = await uploadPhoto(photo);

          dispatch(
            loginUser({
              id: user.id,
              fullname: user.fullname,
              email: user.email,
              photoFilePath: `http://localhost:3001/uploads/${user.photoFilePath}`,
            })
          );
        };
        if (e.target.files) reader.readAsDataURL(e.target.files[0]);

      } catch (err) {
        console.log(err);
      }
    }
  };

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
        <form
          className='user__pic'
          action="/upload"
          method="post"
          encType="multipart/form-data">
          <div className='user__pic-foto'>
            <img
              src={user_Photo}
              alt="user photo"
              id="output" />
          </div>
          <div className='user__pic-btn'>
            <input
              className='user__pic-input'
              accept="image/*"
              onChange={sendingImage}
              type="file">
            </input>
          </div>
        </form>
        <form
          onSubmit={formik.handleSubmit}>
          <div className='user__info'>
            <div className='user__info-personal'>
              <div className='text'>
                <div className='text-name'>Personal information</div>
                <div
                  className='text-btn'
                  onClick={onIsChangeInfo}>
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
                  changeField={isChangeInfo}
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
                  changeField={isChangeInfo}
                />

              </div>
            </div>
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
    </UserProfile>
  );
}

export default User
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { loginUser } from '../../../store/usersSlice';
import photo from '../../../utils/picture/user_photo.png'
import uploadPhoto from '../../../api/users/uploadPhoto';
import { UserType } from '../../../store/usersSlice';
import showToast from '../../../validation/showToast';

import UserPhotoWrapper from './UserPhoto.styles';

export const UserPhoto: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.users.user)

  const userPhoto: string = user.photoFilePath?.endsWith('png') ? user.photoFilePath : photo;

  const sendingImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const reader = new FileReader();
        reader.onload = async () => {
          if (!reader.result) {
            console.log('error');
          };
          const photo = reader.result as string;          
          const user: UserType = await uploadPhoto(photo);
          dispatch(loginUser(user));
        };
        if (e.target.files) reader.readAsDataURL(e.target.files[0]);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.response?.data.message);
        }  
      }
    }
  };

  return (
    <UserPhotoWrapper>
      <div className='user'>
        <form
          className='user__pic'
          action="/upload"
          method="post"
          encType="multipart/form-data">
          <div className='user__pic-foto'>
            <img
              src={userPhoto}
              alt="user"
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
      </div>
      <ToastContainer
        className='toast'
        bodyClassName='toast-body' />
    </UserPhotoWrapper>
  );
}

export default UserPhoto
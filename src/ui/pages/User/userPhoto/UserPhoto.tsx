import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import uploadPhoto from '../../../../api/users/uploadPhoto';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { loginUser } from '../../../../store/usersSlice';
import type { IUserType } from '../../../../store/usersSlice';
import showToast from '../../../../validation/showToast';

import photo from '../../../assets/picture/user_photo.png';
import camera from '../../../assets/picture/camera.png';

import UserPhotoWrapper from './UserPhoto.styles';

export const UserPhoto: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);

  const userPhoto: string = user.photoFilePath || photo;

  const sendingImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            if (!reader.result) {
              // eslint-disable-next-line no-console
              console.log('error');
            }
            const photo = reader.result as string;
            const user: IUserType = await uploadPhoto(photo);
            dispatch(loginUser(user));
          } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.response?.data.message);
        }
      }
    }
  };

  return (
    <UserPhotoWrapper>
      <form>
        <div className="user-photo">
          <img
            src={userPhoto}
            alt="user"
            id="output"
          />
        </div>
        <div className="button">
          <img src={camera} alt="camera" />
          <input
            className="input-field"
            accept="image/*"
            onChange={sendingImage}
            type="file"
          />
        </div>
      </form>
      <ToastContainer
        className="toast"
        bodyClassName="toast-body"
      />
    </UserPhotoWrapper>
  );
};

export default UserPhoto;

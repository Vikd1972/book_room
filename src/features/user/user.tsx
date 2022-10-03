import React, { useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { ToastContainer } from 'react-toastify';

import { useAppSelector, useAppDispatch } from '../../Store/hooks';
import { SchemaUser } from '../../validation/schemaType';
import { loginUser } from '../../Store/booksSlice';
import showToast from '../../validation/showToast';
import instance from '../../middleware/inteceptor';
import user_photo from '../../utils/picture/user_photo.png'

import UserProfile from './user.styled';

export const User: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.books.user)
  const [isChangeInfo, setisChangeInfo] = useState(false);
  const [isChangePass, setisChangePass] = useState(false);
  const [isChangePhoto, setisChangePhoto] = useState(false);

  const onIsChangeInfo = () => {
    setisChangeInfo(true)
  }

  const onIsChangePass = () => {
    setisChangePass(true)
  }

  var sendingImage = function (e: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.onload = function () {
      if (!reader.result) console.log('qwerty');
      const output = document.getElementById('output') as HTMLImageElement;
      if (output) output.src = reader.result as string;
    };
    if (e.target.files) reader.readAsDataURL(e.target.files[0]);
    setisChangePhoto(true);
  };

  interface Values {
    fullname?: string
    email?: string;
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    } as Values,

    validationSchema: object().shape({
      fullname: string().matches(/^$|\w{3,}/, 'must be at least 3 characters long'),
      email: string().email('must be a valid email'),
      oldPassword: string().min(3, 'must be at least 3 characters long'),
      newPassword: string().min(3, 'must be at least 3 characters long'),
      confirmPassword: string().min(3, 'must be at least 3 characters long'),
    }) as SchemaUser,

    onSubmit: values => {
      // console.log(values);
      instance
        .put("http://localhost:3001/api/users/", {
          fullname: (values.fullname ? values.fullname : undefined),
          email: (values.email ? values.email : undefined),
          oldPassword: (values.oldPassword ? values.oldPassword : undefined),
          newPassword: (values.newPassword === values.confirmPassword ? values.newPassword : undefined),
        })
        .then((res) => {
          dispatch(
            loginUser({
              id: res.data.user.id,
              fullname: res.data.user.fullname,
              email: res.data.user.email,
            })
          );

        })
        .catch(function (err) {
          console.log(err);

          showToast(err.response.data.message);
          console.log(err.response.data.message);
        });
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
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              id="output" />
          </div>
          <div className='user__pic-btn'>
            <input
              className='user__pic-input'
              accept="image/*"
              onChange={sendingImage}
              type="file">
            </input>
            {isChangePhoto ? (
              <div>
                <button className='submit-sending'></button>
              </div>
            ) : null}
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
                <div className='info-fullname field'>
                  {isChangeInfo ? (
                    <>
                      {formik.touched.fullname && formik.errors.fullname ? (
                        <div className='field-name err'>{formik.errors.fullname}</div>
                      ) : (
                        <div className='field-name'>Your name now is {user.fullname}. Enter new name</div>
                      )}
                    </>
                  ) : (
                    <div className='field-name'>Your name</div>
                  )}
                  {isChangeInfo ? (
                    <input
                      className='field-value'
                      type="text"
                      autoComplete="off"
                      placeholder='Enter your name'
                      {...formik.getFieldProps('fullname')}
                    />
                  ) : (
                    <div className='field-value'>{user.fullname}</div>
                  )}
                </div>
                <div className='info-email field'>
                  {isChangeInfo ? (
                    <>
                      {formik.touched.email && formik.errors.email ? (
                        <div className='field-name err'>{formik.errors.email}</div>
                      ) : (
                        <div className='field-name'>Your email now is {user.email}. Enter new email</div>
                      )}
                    </>
                  ) : (
                    <div className='field-name'>Your email</div>
                  )}
                  {isChangeInfo ? (
                    <input
                      className='field-value'
                      type="email"
                      autoComplete="off"
                      placeholder='Enter your email'
                      {...formik.getFieldProps('email')}
                    />
                  ) : (
                    <div className='field-value'>{user.email}</div>
                  )}
                </div>
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
                <div className='info-password field'>
                  {isChangePass ? (
                    <>
                      {formik.touched.oldPassword && formik.errors.oldPassword ? (
                        <div className='field-name err'>{formik.errors.oldPassword}</div>
                      ) : (
                        <div className='field-name'>Old password</div>
                      )}
                    </>
                  ) : (
                    <div className='field-name'>Your password</div>
                  )}
                  {isChangePass ? (
                    <input
                      className='field-value'
                      type="password"
                      autoComplete="off"
                      placeholder='Enter old password'
                      {...formik.getFieldProps('oldPassword')}
                    />
                  ) : (
                    <div className='field-value'>*****************</div>
                  )}
                </div>
              </div>
              {isChangePass ? (
                <>
                  <div className='info-password field'>
                    {formik.touched.newPassword && formik.errors.newPassword ? (
                      <div className='field-name err'>{formik.errors.newPassword}</div>
                    ) : (
                      <div className='field-name'>New password</div>
                    )}
                    <input
                      className='field-value'
                      type="password"
                      autoComplete="off"
                      placeholder='Enter new password'
                      {...formik.getFieldProps('newPassword')}
                    />
                  </div>
                  <div className='info-password field'>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                      <div className='field-name err'>{formik.errors.confirmPassword}</div>
                    ) : (
                      <div className='field-name'>Replay password</div>
                    )}
                    <input
                      className='field-value'
                      type="password"
                      autoComplete="off"
                      placeholder='Confirm password'
                      {...formik.getFieldProps('confirmPassword')}
                    />
                  </div>
                </>
              ) : (
                null
              )}
            </div>
          </div>
          {isChangeInfo || isChangePass ? (
            <button
              type='submit'
              className='btn'>
              Confirm
            </button>
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
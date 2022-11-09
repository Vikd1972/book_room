/* eslint-disable no-console */
import React from 'react';

import photo from '../../../../assets/picture/user_photo.png';
import type { ICommentType } from '../../../../../store/booksSlice';

import OneCommentWrapper from './OneComment.styles';

interface IOptions {
  comment: ICommentType;
}

export const OneComment: React.FC<IOptions> = (props) => {
  const today = new Date();

  const userPhoto: string = props.comment.user.photoFilePath?.endsWith('jpeg') ||
    props.comment.user.photoFilePath?.endsWith('png') ? `http://localhost:4001/uploads/${props.comment.user.photoFilePath}` : photo;

  const quantityDays = (commentData: Date) => {
    return Math.round((
      new Date(today).getTime() - new Date(commentData).getTime()
    ) / 86400000);
  };

  return (
    <OneCommentWrapper>
      <div className="user-photo">
        <img
          src={userPhoto}
          alt="user's photo"
        />
      </div>
      <div className="contents">
        <h2>{props.comment.user.fullname}</h2>
        <h4>Left a comment {quantityDays(props.comment.commentData)} days ago</h4>
        <p>{props.comment.comment}</p>
      </div>
    </OneCommentWrapper>
  );
};

export default OneComment;

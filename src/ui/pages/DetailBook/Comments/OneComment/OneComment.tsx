/* eslint-disable no-console */
import React from 'react';

import config from '../../../../../config';
import type { ICommentType } from '../../../../../store/booksSlice';

import photo from '../../../../assets/picture/user_photo.png';

import OneCommentWrapper from './OneComment.styles';

interface IOptions {
  comment: ICommentType;
}

export const OneComment: React.FC<IOptions> = (props) => {
  const today = new Date();

  const userPhoto: string = props.comment.user.photoFilePath?.endsWith('jpeg') ||
    props.comment.user.photoFilePath?.endsWith('png') ? `${config.pathToUserPhoto}${props.comment.user.photoFilePath}` : photo;

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
        <div>
          <h2>{props.comment.user.fullname}</h2>
          <h4>Left a comment {quantityDays(props.comment.commentData)} days ago</h4>
        </div>
        <div className="comment-wrapper">
          <p>{props.comment.comment}</p>
        </div>
      </div>
    </OneCommentWrapper>
  );
};

export default OneComment;

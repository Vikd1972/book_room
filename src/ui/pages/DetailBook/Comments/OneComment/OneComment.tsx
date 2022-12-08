/* eslint-disable no-console */
import React, { useMemo } from 'react';
import dayjs from 'dayjs';

import type { ICommentType } from '../../../../../store/booksSlice';

import photo from '../../../../assets/picture/user_photo.png';

import OneCommentWrapper from './OneComment.styles';

interface IOptions {
  comment: ICommentType;
}

dayjs().format();

export const OneComment: React.FC<IOptions> = (props) => {
  const userPhoto: string = `${props.comment.user.photoFilePath}` || photo;

  const quantityDays = useMemo(() => {
    const today = dayjs(new Date());
    return today.diff(props.comment.commentData, 'day');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <h4>Left a comment {quantityDays} days ago</h4>
        </div>
        <div className="comment-wrapper">
          <p>{props.comment.comment}</p>
        </div>
      </div>
    </OneCommentWrapper>
  );
};

export default OneComment;

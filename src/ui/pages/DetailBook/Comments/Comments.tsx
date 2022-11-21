/* eslint-disable no-console */
import React, { useState } from 'react';

import { Button } from '../../../components/Button/Buttons';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import setComments from '../../../../api/comments/setComments';
import OneComment from './OneComment/OneComment';
import { getCommentsThunk } from '../../../../store/booksThunks';

import CommentsWrapper from './Comments.styles';

interface IOptions {
  bookId: number;
}

export const Comments: React.FC<IOptions> = (props) => {
  const dispatch = useAppDispatch();
  const commentsOfBook = useAppSelector((state) => state.books.comments);
  const user = useAppSelector((state) => state.users.user);
  const { bookId } = props;
  const [comment, setComment] = useState<string>('');

  const addComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const onSendingCommentsText = async (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.length) {
      await setComments({ bookId, comment });
      await dispatch(getCommentsThunk(bookId)).unwrap();
      setComment('');
    }
  };

  return (
    <CommentsWrapper>
      <h1>Comments</h1>
      {commentsOfBook.map((comment) => (
        <div key={comment.id}>
          <OneComment
            comment={comment}
          />
        </div>
      ))}
      {user.email && (
        <form
          onSubmit={onSendingCommentsText}
        >
          <div className="comments-input">
            <textarea
              id="comments"
              name="comments"
              value={comment}
              placeholder="Share a comment"
              onChange={addComment}
            />
          </div>
          <Button
            type="submit"
            className="button"
            text="Post a comment"
          />
        </form>
      )}
    </CommentsWrapper>
  );
};

export default Comments;

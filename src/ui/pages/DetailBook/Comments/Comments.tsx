/* eslint-disable no-console */
import React, { useState } from 'react';
import { io } from 'socket.io-client';

import { Button } from '../../../components/Button/Buttons';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import OneComment from './OneComment/OneComment';
import { setCommentsThunk } from '../../../../store/booksThunks';

import CommentsWrapper from './Comments.styles';

const socket = io('http://localhost:4001/');
interface IOptions {
  bookId: number;
}

export const Comments: React.FC<IOptions> = (props) => {
  const dispatch = useAppDispatch();
  const commentsOfBook = useAppSelector((state) => state.books.comments);
  const user = useAppSelector((state) => state.users.user);
  const { bookId } = props;
  const [comment, setComment] = useState<string>('');

  socket.on('hello', (arg) => {
    console.log(arg); // world
  });

  const addComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onSendingCommentsText = async (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.length) {
      await dispatch(setCommentsThunk({ bookId, comment })).unwrap();
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

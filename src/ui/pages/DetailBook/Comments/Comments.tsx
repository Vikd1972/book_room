/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import { Button } from '../../../components/Button/Buttons';
import { addCommentFromSocket } from '../../../../store/booksSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import OneComment from './OneComment/OneComment';

import CommentsWrapper from './Comments.styles';

const socket = io('http://localhost:4001');
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
  };

  // useEffect(() => {
  //   socket.on('comment', (...arg) => {
  //     dispatch(addCommentFromSocket(arg[0]));
  //   });
  //   return () => { socket.removeAllListeners('comment'); };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const onSendingCommentsText = async (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    const commentData = new Date();
    const options = {
      id: bookId,
      comment,
      commentData,
      user,
    };
    socket.emit('comment', options);
    dispatch(addCommentFromSocket(options));
    setComment('');
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

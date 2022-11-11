import React from 'react';

import { Button } from '../../../components/Button/Buttons';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import setComments from '../../../../api/comments/setComments';
import { getCommentsOfBook } from '../../../../store/booksSlice';
import OneComment from './OneComment/OneComment';

import CommentsWrapper from './Comments.styles';

interface IOptions {
  bookId: number;
}

export const Comments: React.FC<IOptions> = (props) => {
  const dispatch = useAppDispatch();
  const commentsOfBook = useAppSelector((state) => state.books.comments);
  const user = useAppSelector((state) => state.users.user);
  const { bookId } = props;

  const allCommentsOfBook = [...commentsOfBook];

  allCommentsOfBook.sort(
    (a, b) => (new Date(a.commentData).getTime()) - (new Date(b.commentData).getTime()),
  );

  const onSendingCommentsText = async (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comments = (document.getElementById('comments') as HTMLInputElement).value;

    if (comments.length) {
      const newComments = await setComments({ bookId, comments });
      dispatch(getCommentsOfBook(newComments));
    }
    (document.getElementById('comments') as HTMLInputElement).value = '';
  };

  return (
    <CommentsWrapper>
      <h1>Comments</h1>
      {allCommentsOfBook.map((comment) => (
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
              placeholder="Share a comment"
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

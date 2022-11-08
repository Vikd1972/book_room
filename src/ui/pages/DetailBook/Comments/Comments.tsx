/* eslint-disable no-console */
import React from 'react';

import { Button } from '../../../components/Button/Buttons';
import setComments from '../../../../api/comments/setComments';

import CommentsWrapper from './Comments.styles';

interface IOptions {
  bookId: number;
}

export const Comments: React.FC<IOptions> = (props) => {
  const { bookId } = props;

  const onSendingCommentsText = async (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comments = (document.getElementById('comments') as HTMLInputElement).value;
    const newComments = await setComments({ bookId, comments });
    console.log(newComments);
    (document.getElementById('comments') as HTMLInputElement).value = '';
  };

  return (
    <CommentsWrapper>
      <h1>Comments</h1>
      <form
        onSubmit={onSendingCommentsText}
      >
        <div className="comments-width">
          <div className="comments-input">
            <textarea
              id="comments"
              name="comments"
              placeholder="Share a comment"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="button"
          text="Post a comment"
        />
      </form>
    </CommentsWrapper>
  );
};

export default Comments;

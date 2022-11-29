/* eslint-disable no-console */
import React from 'react';
import Rating from '@mui/material/Rating';

import { useAppDispatch } from '../../../store/hooks';
import { getAverageRatingThunk } from '../../../store/booksThunks';
import RatingFiveStarsWrapper from './RatingFiveStars.styles';

interface IOptions {
  bookId: number;
  myRating?: number;
  readOnly?: boolean;
  changeMyRating?: (value: number) => void;
  size?: 'small' | 'medium' | 'large';
}

export const RatingFiveStars: React.FC<IOptions> = (props) => {
  const dispatch = useAppDispatch();
  const { bookId, myRating } = props;

  const setMyRating = async (event: React.SyntheticEvent<Element, Event>, value: number | null) => {
    try {
      if (value) {
        dispatch(getAverageRatingThunk({ onRating: value, bookId })).unwrap();
        if (props.changeMyRating) {
          props.changeMyRating(value);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RatingFiveStarsWrapper>
      {props.readOnly ? (
        <Rating
          precision={0.1}
          value={myRating}
          size={props.size}
          readOnly
        />
      ) : (
        <Rating
          precision={0.1}
          value={myRating}
          size={props.size}
          onChange={setMyRating}
        />
      )}
    </RatingFiveStarsWrapper>
  );
};

export default RatingFiveStars;

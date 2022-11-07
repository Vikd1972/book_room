/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import setRating from '../../../api/rating/setRating';
import { setOverallRating } from '../../../store/booksSlice';

import RatingFiveStarsWrapper from './RatingFiveStars.styles';

interface IOptions {
  bookId: number;
  myRating: number;
}

export const RatingFiveStars: React.FC<IOptions> = (props) => {
  const dispatch = useAppDispatch();
  const { bookId, myRating } = props;

  const [onRating, setOnRating] = useState<number>(myRating);

  useEffect(() => {
    (async () => {
      try {
        if (onRating) {
          console.log(onRating);
          const rating = await setRating({ onRating, bookId });
          dispatch(setOverallRating(rating));
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [
    dispatch,
    onRating,
    myRating,
    bookId,
  ]);

  return (
    <RatingFiveStarsWrapper>
      <Rating
        precision={0.5}
        value={myRating}
        size="large"
        onChange={(event, value) => {
          setOnRating(value || 0);
        }}
      />
    </RatingFiveStarsWrapper>
  );
};

export default RatingFiveStars;

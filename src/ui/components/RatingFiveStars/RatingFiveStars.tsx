/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';

import { useAppDispatch } from '../../../store/hooks';
import setRating from '../../../api/rating/setRating';
import { setOverallRating } from '../../../store/booksSlice';

import RatingFiveStarsWrapper from './RatingFiveStars.styles';

interface IOptions {
  bookId: number;
  myRating: number | undefined;
  readOnly?: boolean;
}

export const RatingFiveStars: React.FC<IOptions> = (props) => {
  const dispatch = useAppDispatch();
  const { bookId, myRating } = props;

  const [onRating, setOnRating] = useState<number>(myRating || 0);

  const setMyRating = async (value: number) => {
    try {
      if (value) {
        setOnRating(value);
        const ratingBook = await setRating({ onRating: value, bookId });
        dispatch(setOverallRating(ratingBook));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (() => {
      try {
        setOnRating(myRating || 0);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [
    myRating,
  ]);

  return (
    <RatingFiveStarsWrapper>
      {props.readOnly ? (
        <Rating
          precision={0.5}
          value={onRating}
          size="large"
          readOnly
        />
      ) : (
        <Rating
          precision={0.5}
          value={onRating}
          size="large"
          onChange={(event, value) => {
            setMyRating(value || 0);
          }}
        />
      )}
    </RatingFiveStarsWrapper>
  );
};

export default RatingFiveStars;
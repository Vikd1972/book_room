/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';

import { useAppDispatch } from '../../../store/hooks';
import { setAverageRating } from '../../../store/booksSlice';
import setRating from '../../../api/rating/setRating';

import RatingFiveStarsWrapper from './RatingFiveStars.styles';

interface IOptions {
  bookId: number;
  myRating?: number;
  readOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const RatingFiveStars: React.FC<IOptions> = (props) => {
  const dispatch = useAppDispatch();
  const { bookId, myRating } = props;

  const [onRating, setOnRating] = useState<number>(myRating || 0);

  const setMyRating = async (event: React.SyntheticEvent<Element, Event>, value: number | null) => {
    try {
      if (value) {
        setOnRating(value);
        const ratingBook = await setRating({ onRating: value, bookId });
        dispatch(setAverageRating(ratingBook));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   setOnRating(myRating || 0);
  //   console.log('>>>> here');
  // }, [
  //   myRating,
  // ]);

  return (
    <RatingFiveStarsWrapper>
      {props.readOnly ? (
        <Rating
          precision={0.1}
          value={onRating}
          size={props.size}
          readOnly
        />
      ) : (
        <Rating
          precision={0.1}
          value={onRating}
          size={props.size}
          onChange={setMyRating}
        />
      )}
    </RatingFiveStarsWrapper>
  );
};

export default RatingFiveStars;

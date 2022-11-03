/* eslint-disable no-console */
import React, { useState } from 'react';

import { useAppDispatch } from '../../../../store/hooks';
import setRating from '../../../../api/rating/setRating';
import { setOverallRating } from '../../../../store/booksSlice';
import starEmpty from '../../../assets/picture/star0.png';
import starFull from '../../../assets/picture/star1.png';

import RatingWrapper from './Rating.styles';

interface IOptions {
  bookId: number;
}

export const Rating: React.FC<IOptions> = (props) => {
  const dispatch = useAppDispatch();
  const [onRating, setOnRating] = useState<number>(0);
  const ratingArr = [1, 2, 3, 4, 5];

  const setMyRating = async (item: number) => {
    setOnRating(item);
    const bookId = props.bookId;
    const overallRating = await setRating({ item, bookId });
    dispatch(setOverallRating(overallRating));

    console.log(onRating);
  };
  return (
    <RatingWrapper>
      {ratingArr.map((item) => (
        <div
          key={item}
          className="star-container"
          onClick={() => setMyRating(item)}
        >
          <img
            src={item <= onRating ? starFull : starEmpty}
            alt="star"
            className="star"
            id={item.toString()}
          />
        </div>
      ))}
    </RatingWrapper>
  );
};

export default Rating;

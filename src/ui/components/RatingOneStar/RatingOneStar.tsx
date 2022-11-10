/* eslint-disable no-console */
import React from 'react';
import Rating from '@mui/material/Rating';

import { useAppSelector } from '../../../store/hooks';

import RatingOneStarWrapper from './RatingOneStar.styles';

export const RatingOneStar: React.FC = () => {
  const averageRating = useAppSelector((state) => state.books.ratingBook);

  return (
    <RatingOneStarWrapper>
      <Rating
        precision={0.1}
        value={averageRating && averageRating / 5}
        size="large"
        readOnly
        max={1}
      />
      <p>{averageRating.toFixed(1)}</p>
    </RatingOneStarWrapper>
  );
};

export default RatingOneStar;

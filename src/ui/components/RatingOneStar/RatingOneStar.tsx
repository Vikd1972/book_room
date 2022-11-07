/* eslint-disable no-console */
import React from 'react';
import Rating from '@mui/material/Rating';

import RatingOneStarWrapper from './RatingOneStar.styles';

interface IOption {
  averageRating: number;
}

export const RatingOneStar: React.FC<IOption> = (props) => {
  return (
    <RatingOneStarWrapper>
      <Rating
        precision={0.1}
        value={props.averageRating && props.averageRating / 5}
        size="large"
        readOnly
        max={1}
      />
      <p>{props.averageRating}</p>
    </RatingOneStarWrapper>
  );
};

export default RatingOneStar;

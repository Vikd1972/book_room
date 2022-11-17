/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../store/hooks';

import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';

export const ChoiceOfGenre: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const allGenres = useAppSelector((state) => state.books.genres);

  const queryByGenres = searchParams.get('genres')?.split(',');
  const [currentGenres, setCurrentGenres] = useState<string[]>(queryByGenres || []);

  const onSelectByGenre = (genreId: number) => {
    const genreIndex = currentGenres.findIndex((item) => item === genreId.toString());

    if (genreIndex === -1) {
      currentGenres.push(genreId.toString());
      setCurrentGenres(currentGenres);
    } else {
      currentGenres.splice(genreIndex, 1);
      setCurrentGenres(currentGenres);
    }

    if (currentGenres.length) {
      searchParams.set('genres', currentGenres.join(','));
      setSearchParams(searchParams);
    } else {
      searchParams.delete('genres');
      setSearchParams(searchParams);
    }
  };

  return (
    <ChoiceOfGenreWrapper>
      {allGenres.map((genre) => (
        <div key={genre.id}>
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={currentGenres.includes((genre.id.toString())) && true}
              onChange={() => onSelectByGenre(genre.id)}
            />
            <span className="name-item">{genre.name}</span>
          </label>
        </div>
      ))}
    </ChoiceOfGenreWrapper >
  );
};

export default ChoiceOfGenre;

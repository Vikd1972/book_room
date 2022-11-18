/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../store/hooks';

import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';

export const ChoiceOfGenre: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const allGenres = useAppSelector((state) => state.books.genres);

  const [currentGenres, setCurrentGenres] = useState<string[]>(
    searchParams.get('genres')?.split(',') || [],
  );

  const onSelectByGenre = (genreId: number) => {
    const genreIndex = currentGenres.findIndex((item) => item === genreId.toString());

    genreIndex === -1
      ? currentGenres.push(genreId.toString())
      : currentGenres.splice(genreIndex, 1);

    setCurrentGenres(currentGenres);

    currentGenres.length
      ? searchParams.set('genres', currentGenres.join(','))
      : searchParams.delete('genres');

    setSearchParams(searchParams);
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

/* eslint-disable no-unused-expressions */
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../store/hooks';

import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';

export const ChoiceOfGenre: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const allGenres = useAppSelector((state) => state.books.genres);

  const currentGenres = useMemo(() => {
    return searchParams.get('genres')?.split(',') || [];
  }, [
    searchParams,
  ]);

  const onSelectByGenre = (genreId: number) => {
    const genreIndex = currentGenres.findIndex((item) => item === genreId.toString());

    const newCurrentGenres = [...currentGenres];

    genreIndex === -1
      ? newCurrentGenres.push(genreId.toString())
      : newCurrentGenres.splice(genreIndex, 1);

    currentGenres.length
      ? searchParams.set('genres', newCurrentGenres.join(','))
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
              checked={currentGenres.includes((genre.id.toString()))}
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

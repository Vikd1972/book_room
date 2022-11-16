/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { setQueryString } from '../../../../../store/booksSlice';

import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';

export const ChoiceOfGenre: React.FC = () => {
  const allGenres = useAppSelector((state) => state.books.genres);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const [currentGenres, setCurrentGenres] = useState<string[]>([]);

  const onSelectByGenre = (genreId: number) => {
    const genreIndex = currentGenres.findIndex((item) => item === genreId.toString());
    const changeGenres = currentGenres;
    if (genreIndex === -1) {
      changeGenres.push(genreId.toString());
      setCurrentGenres(changeGenres);
    } else {
      changeGenres.splice(genreIndex, 1);
      setCurrentGenres(changeGenres);
    }
    if (currentGenres.length) {
      if (url.searchParams.has('genres')) {
        url.searchParams.set('genres', currentGenres.join(','));
      } else {
        url.searchParams.append('genres', currentGenres.join(','));
      }
    } else {
      url.searchParams.delete('genres');
    }
    dispatch(setQueryString(url.search));
    navigate(url.search);
  };

  return (
    <ChoiceOfGenreWrapper>
      {allGenres.map((genre) => (
        <div key={genre.id}>
          <label className="checkbox-item">
            <input
              type="checkbox"
              name={genre.name.replace(/[^a-zA-Z]/g, '')}
              value={genre.id}
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

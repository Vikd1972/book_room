import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { setQueryString } from '../../../../../store/booksSlice';

import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';

export const ChoiceOfGenre: React.FC = () => {
  const params = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = new URL(window.location.href);

  const onSelectByGenre = () => {
    const currentGenres: string[] = [];
    for (const genre of params.genres) {
      const checkbox = document.querySelector(`input[name=${genre.name.replace(/[^a-zA-Z]/g, '')}]:checked`) as HTMLInputElement;
      if (checkbox) {
        currentGenres.push(checkbox.value);
      }
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
      {params.genres.map((genre) => (
        <div key={genre.id}>
          <label className="checkbox-item">
            <input
              type="checkbox"
              name={genre.name.replace(/[^a-zA-Z]/g, '')}
              value={genre.id}
              onChange={onSelectByGenre}
            />
            <span className="name-item">{genre.name}</span>
          </label>
        </div>
      ))}
    </ChoiceOfGenreWrapper >
  );
};

export default ChoiceOfGenre;

/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { loadQueryString } from '../../../../../store/booksSlice';

import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';

export const ChoiceOfGenre: React.FC = () => {
  const params = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = new URL(window.location.href);

  const onSelectByGenre = async () => {
    let currentGenres = '';
    for (const genre of params.genres) {
      const checkbox = document.querySelector(`input[name=${genre.name.replace(/[^a-zA-Z]/g, '')}]:checked`) as HTMLInputElement;
      if (checkbox) {
        // eslint-disable-next-line prefer-template
        currentGenres += checkbox.value + ',';
      }
    }
    if (currentGenres.length) {
      if (url.searchParams.has('genres')) {
        url.searchParams.set('genres', currentGenres);
      } else {
        url.searchParams.append('genres', currentGenres);
      }
    } else {
      url.searchParams.delete('genres');
    }
    dispatch(loadQueryString(url.search));
    navigate(url.search);
  };

  return (
    <ChoiceOfGenreWrapper>
      <div className="arrow" />
      <div className="checkbox" id="checkbox">
        {params.genres.map((genre) => (
          <p key={genre.id}>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name={genre.name.replace(/[^a-zA-Z]/g, '')}
                value={genre.id}
                onChange={onSelectByGenre}
              />
              <span className="name-item">{genre.name}</span>
            </label>
          </p>
        ))}

      </div>
    </ChoiceOfGenreWrapper >
  );
};

export default ChoiceOfGenre;

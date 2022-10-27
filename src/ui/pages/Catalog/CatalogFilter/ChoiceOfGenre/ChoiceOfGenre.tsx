import React from 'react';

import { useAppSelector } from '../../../../../store/hooks';

import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';

interface SelectByGenres {
  onSelectByGenres: (currentGenres: number[]) => void
}

export const ChoiceOfGenre: React.FC<SelectByGenres> = (props) => {
  const params = useAppSelector(state => state.books)

  let currentGenres: number[] = [];

  const onSelectByGenre = () => {
    currentGenres = [];
    for (let genre of params.genres) {
      const checkbox = document.querySelector(`input[name=${genre.name.replace(/[^a-zA-Z]/g, '')}]:checked`) as HTMLInputElement;
      if (checkbox) {
        currentGenres.push(Number(checkbox.value))
      }
    };
    props.onSelectByGenres(currentGenres)
  }

  return (
    <ChoiceOfGenreWrapper>
      <div className='arrow'></div>
      <div className='checkbox' id='checkbox'>

        {params.genres.map(genre => (
          <p key={genre.id}>
            <label className="checkbox-item">
              <input
                type="checkbox"
                name={genre.name.replace(/[^a-zA-Z]/g, '')}
                value={genre.id}
                onChange={onSelectByGenre} />
              <span className='name-item'>{genre.name}</span>
            </label>
          </p>
        ))}

      </div>
    </ChoiceOfGenreWrapper >
  );
}

export default ChoiceOfGenre

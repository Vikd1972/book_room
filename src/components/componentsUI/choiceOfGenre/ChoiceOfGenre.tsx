import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { loadGenres } from '../../../store/booksSlice';
import { useParams } from "react-router-dom";
import getBooks from '../../../api/books/getBooks';
import { addBooks } from '../../../store/booksSlice';

import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';

export const ChoiceOfGenre: React.FC = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector(state => state.books.genres)

  let pageNumber = useParams();

  let currentGenres: number[] = [];

  const onSelectByGenre = async () => {
    currentGenres = [];
    for (let genre of genres) {
      const checkbox = document.querySelector(`input[name=${genre.name.replace(/[^a-zA-Z]/g, '')}]:checked`) as HTMLInputElement;
      if (checkbox) {
        currentGenres.push(Number(checkbox.value))
      }
    };    
    dispatch(loadGenres(currentGenres))

    const options = {
      currentPage: Number(pageNumber.activePage),
      genres: currentGenres
    }
    const response = await getBooks(options);
    dispatch(addBooks(response))
  }

  return (
    <ChoiceOfGenreWrapper>
      <div className='arrow'></div>
      <div className='checkbox' id='checkbox'>

        {genres.map(genre => (
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

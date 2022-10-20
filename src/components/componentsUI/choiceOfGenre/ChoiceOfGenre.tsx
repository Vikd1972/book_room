import React, { useState } from 'react';
import ChoiceOfGenreWrapper from './ChoiceOfGenre.styles';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { loadGenres } from '../../../store/booksSlice';
import { useParams } from "react-router-dom";
import getBooks from '../../../api/books/getBooks';
import { addBooks } from '../../../store/booksSlice';

export const ChoiceOfGenre: React.FC = () => {
  const genres = useAppSelector(state => state.books.currentGenres)

  let pageNumber = useParams();

  const dispatch = useAppDispatch();
  let currentGenres: string[] = [];
  const genresId = [
    'fiction',
    'nonfiction',
    'lightfiction',
    'sciencefiction',
    'fantasy',
    'businessFinance',
    'politics',
    'travelbooks',
    'autobiography',
    'history',
    'thriller',
    'mystery',
    'romance',
    'satire',
    'horror',
    'health',
    'childrensbooks',
    'encyclopedia',
  ]
  
  const onSelectByGenre = async () => {
    currentGenres = [];
    for (let genre of genresId) {
      const checkbox = document.querySelector(`input[id=${genre}]:checked`) as HTMLInputElement;
      if (checkbox) {
        currentGenres.push(checkbox.value)
      }
    }
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

        <label className="checkbox-item">
          <input type="checkbox" id="fiction" value="Fiction" onClick={onSelectByGenre} />
          <span>Fiction</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="nonfiction" value="Non—fiction" onClick={onSelectByGenre} />
          <span>Non—fiction</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="lightfiction" value="Light fiction" onClick={onSelectByGenre} />
          <span>Light fiction</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="sciencefiction" value="Science-fiction" onClick={onSelectByGenre} />
          <span>Science-fiction</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="fantasy" value="Fantasy" onClick={onSelectByGenre} />
          <span>Fantasy</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="businessFinance" value="Business & Finance" onClick={onSelectByGenre} />
          <span>Business & Finance</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="politics" value="Politics" onClick={onSelectByGenre} />
          <span>Politics</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="travelbooks" value="Travel books" onClick={onSelectByGenre} />
          <span>Travel books</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="autobiography" value="Autobiography" onClick={onSelectByGenre} />
          <span>Autobiography</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="history" value="History" onClick={onSelectByGenre} />
          <span>History</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="thriller" value="Thriller" onClick={onSelectByGenre} />
          <span>Thriller</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="mystery" value="Mystery" onClick={onSelectByGenre} />
          <span>Mystery</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="romance" value="Romance" onClick={onSelectByGenre} />
          <span>Romance</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="satire" value="Satire" onClick={onSelectByGenre} />
          <span>Satire</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="horror" value="Horror" onClick={onSelectByGenre} />
          <span>Horror</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="health" value="Health" onClick={onSelectByGenre} />
          <span>Health</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="childrensbooks" value="Children`s books" onClick={onSelectByGenre} />
          <span>Children`s books</span>
        </label><br />

        <label className="checkbox-item">
          <input type="checkbox" id="encyclopedia" value="Encyclopedia" onClick={onSelectByGenre} />
          <span>Encyclopedia</span>
        </label><br />

      </div>
    </ChoiceOfGenreWrapper >
  );
}

export default ChoiceOfGenre

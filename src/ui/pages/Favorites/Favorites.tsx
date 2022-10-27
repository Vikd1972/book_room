import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { AxiosError } from 'axios';

import Book from '../../components/Book/Book';
import showToast from '../../../validation/showToast';
import { addRecomBooks } from '../../../store/booksSlice';
import getFavoritesBooks from '../../../api/favorites/getFavoritesBooks';

import FavoritesWrapper from './Favorites.styles';

export const Favorites: React.FC = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector(state => state.books.books)
  const favorites = useAppSelector(state => state.users.userFavorites)

  useEffect(() => {
    (async () => {
      try {
        const favoritesBooks = await getFavoritesBooks(favorites);
        dispatch(addRecomBooks(favoritesBooks))
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [favorites, dispatch]);

  return (
    <FavoritesWrapper>
      <div className='title'>Favorites</div>
      <div className='books'>
        {books.map(book => (
          <div key={book.id}>
            <Book
              book={book}
            />
          </div>
        ))}
      </div>
    </FavoritesWrapper >
  );
}

export default Favorites
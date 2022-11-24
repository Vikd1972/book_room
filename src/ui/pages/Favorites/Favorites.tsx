/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import Book from '../../components/Book/Book';
import showToast from '../../../validation/showToast';
import { getFavoritesBookThunk } from '../../../store/booksThunks';

import FavoritesWrapper from './Favorites.styles';

export const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.users.favorites);
  const books = useAppSelector((state) => state.books.books);

  useEffect(() => {
    (async () => {
      try {
        const idBooksIsFavorites: number[] = [];
        favorites.forEach((item) => {
          if (item.id) {
            idBooksIsFavorites.push(item.id);
          }
        });
        await dispatch(getFavoritesBookThunk(idBooksIsFavorites));
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [favorites, dispatch]);

  return (
    <FavoritesWrapper>
      <div className="title">Favorites</div>
      <div className="books">
        {books.map((book) => (
          <div key={book.id}>
            <Book
              book={book}
            />
          </div>
        ))}
      </div>
    </FavoritesWrapper >
  );
};

export default Favorites;

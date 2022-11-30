/* eslint-disable no-console */
import React from 'react';

import { useAppSelector } from '../../../store/hooks';
import Book from '../../components/Book/Book';

import FavoritesWrapper from './Favorites.styles';

export const Favorites: React.FC = () => {
  const favorites = useAppSelector((state) => state.users.favorites);

  return (
    <FavoritesWrapper>
      <div className="title">Favorites</div>
      <div className="books">
        {favorites.map((book) => (
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

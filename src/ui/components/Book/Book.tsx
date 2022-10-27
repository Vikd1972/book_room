import React from 'react';
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { Button } from '../Button/Buttons';
import addBookToCart from '../../../api/cart/addBookToCart';
import addToFavorites from '../../../api/favorites/addToFavorites';
import { addCart, loginUser } from '../../../store/usersSlice';
import { BookType } from '../../../store/booksSlice'
import favorites from '../../assets/picture/btn_save.png'
import favoritesActive from '../../assets/picture/btn_save_active.png'

import BookWrapper from './Book.styles';

type Props = {
  book: BookType,
};

export const Book: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users)
  const favoritesButton = users.userFavorites.includes(props.book.id) ?
    favoritesActive : favorites;

  const currentPrice = props.book.paperbackQuantity ? props.book.paperbackPrice : props.book.hardcoverPrice;
  const textButton = `$ ${currentPrice.toFixed(2).toString()} USD`;

  const addToCart = async () => {
    try {
      const userId = users.user.id;
      const bookId = props.book.id;
      const cart = await addBookToCart({ userId, bookId });
      dispatch(addCart(cart));
    }
    catch (err) {
      console.log(err);
    }
  }

  const addBookToFavorites = async () => {
    try {
      const userId = users.user.id;
      const bookId = props.book.id;
      const newUser = await addToFavorites({ userId, bookId });
      dispatch(loginUser(newUser));
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <BookWrapper>
      <div className='cover-container'>
        <Link
          to={`/detail/${props.book.id}`}>
          <img
            src={props.book.pathToCover}
            alt='cover'
            id='cover' />
        </Link>
        <div
          onClick={addBookToFavorites}
          className='favorites'>
          <img src={favoritesButton} alt="favorites" />
        </div>
      </div>
      <div className='name'>{props.book.name}</div>
      <div className='author'>{props.book.author}</div>
      <div className='rating'>
        <div className='star-container'>
          <div className='star'></div>
          <div className='star'></div>
          <div className='star'></div>
          <div className='star'></div>
          <div className='star'></div>
        </div>
        <div className='rating-value'>5.0</div>
      </div>
      <Button
        type='button'
        className="button"
        onClick={addToCart}
        text={textButton} />
    </BookWrapper >
  );
}

export default Book;
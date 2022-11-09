/* eslint-disable no-console */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { Button } from '../Button/Buttons';
import addBookToCart from '../../../api/cart/addBookToCart';
import addToFavorites from '../../../api/favorites/addToFavorites';
import { addCart, loginUser } from '../../../store/usersSlice';
import RatingFiveStars from '../RatingFiveStars/RatingFiveStars';
import type { IBookType } from '../../../store/booksSlice';
import favorites from '../../assets/picture/btn_save.png';
import favoritesActive from '../../assets/picture/btn_save_active.png';

import BookWrapper from './Book.styles';

type PropsType = {
  book: IBookType;
};

export const Book: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const users = useAppSelector((state) => state.users);

  const favoritesButton = users.userFavorites.includes(props.book.id)
    ? favoritesActive : favorites;

  const currentPrice = props.book.paperbackQuantity
    ? props.book.paperbackPrice : props.book.hardcoverPrice;

  const textButton = `$ ${currentPrice.toFixed(2).toString()} USD`;
  const bookId = props.book.id;
  const idBooksInCart: number[] = [];

  users.cart.forEach((item) => {
    idBooksInCart.push(item.book.id);
  });
  const isPurchased = idBooksInCart.includes(bookId);

  const addToCart = async () => {
    try {
      if (!users.user.email) {
        navigate('/login');
      }
      const cart = await addBookToCart({ bookId });
      dispatch(addCart(cart));
    } catch (err) {
      console.log(err);
    }
  };

  const addBookToFavorites = async () => {
    try {
      if (!users.user.email) {
        navigate('/login');
      }
      const newUser = await addToFavorites({ bookId });
      dispatch(loginUser(newUser));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BookWrapper>
      <div className="cover-container">
        <Link to={`/detail/${props.book.id}`}>
          <img
            src={props.book.pathToCover}
            alt="cover"
          />
        </Link>
        <div
          onClick={addBookToFavorites}
          className="favorites"
        >
          <img src={favoritesButton} alt="favorites" />
        </div>
        {props.book.isNew && <div className="marker is-new">New</div>}
        {props.book.isBestseller && <div className="marker is-bestseller">Bestseller</div>}
      </div>
      <h2 className="name">{props.book.name}</h2>
      <h4 className="author">{props.book.author}</h4>
      <div className="rating">
        <div className="rating__stars">
          <RatingFiveStars
            readOnly
            myRating={props.book.averageRating}
            bookId={props.book.id}
          />
        </div>
        <div className="rating__value">
          {props.book.averageRating && (props.book.averageRating.toFixed(1))}
        </div>
      </div>
      {isPurchased
        ? (
          <Button
            type="button"
            className="button in-cart"
            text="Added to cart"
          />
        )
        : (
          <Button
            type="button"
            className="button"
            onClick={addToCart}
            text={textButton}
          />
        )
      }
    </BookWrapper >
  );
};

export default Book;

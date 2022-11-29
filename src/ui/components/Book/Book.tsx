/* eslint-disable no-console */
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import type { IBookType } from '../../../store/booksSlice';
import { changeFavorites, addOrRemoveInCart } from '../../../store/usersSlice';
import addBookToCart from '../../../api/cart/addBookToCart';
import addOrRemoveToFavorites from '../../../api/favorites/addOrRemoveToFavorites';
import RatingFiveStars from '../RatingFiveStars/RatingFiveStars';
import { Button } from '../Button/Buttons';

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

  const textButton = `$ ${props.book.paperbackPrice.toFixed(2).toString()} USD`;
  const { id: bookId } = props.book;

  const favoritesButton = useMemo(() => {
    return users.favorites.find((item) => item.id === bookId)
      ? favoritesActive
      : favorites;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    users.favorites,
  ]);

  const isPurchased = useMemo(() => {
    return !!users.cart.find((item) => item.book?.id === bookId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    users.cart,
  ]);

  const addToCart = async () => {
    try {
      if (!users.user.email) {
        navigate('/login');
      }
      await addBookToCart({ bookId });
      dispatch(addOrRemoveInCart(props.book));
    } catch (err) {
      console.log(err);
    }
  };

  const addToFavorites = async () => {
    try {
      if (!users.user.email) {
        navigate('/login');
      }
      await addOrRemoveToFavorites({ bookId });
      dispatch(changeFavorites(props.book));
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
          onClick={addToFavorites}
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
            size="large"
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
            className="purchase-button in-cart"
            text="Added to cart"
          />
        )
        : (
          <Button
            type="button"
            className="purchase-button"
            onClick={addToCart}
            text={textButton}
          />
        )
      }
    </BookWrapper >
  );
};

export default Book;

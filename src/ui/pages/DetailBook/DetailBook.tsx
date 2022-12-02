/* eslint-disable no-console */
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { getDetailBooksThunk } from '../../../store/booksThunks';
import { Button } from '../../components/Button/Buttons';
import { addOrRemoveInCart } from '../../../store/usersSlice';
import showToast from '../../../validation/showToast';
import addBookToCart from '../../../api/cart/addBookToCart';
import RatingFiveStars from '../../components/RatingFiveStars/RatingFiveStars';
import RatingOneStar from '../../components/RatingOneStar/RatingOneStar';
import AuthorizePoster from '../../components/AuthorizePoster/AuthorizePoster';
import Recommendations from '../Recommendations/Recommendations';
import Comments from './Comments/Comments';

import arrow from '../../assets/picture/arrow_back.png';

import DetailBookWrapper from './DetailBook.styles';

export const DetailBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const book = useAppSelector((state) => state.books.books[0]);

  const [myRating, setMyRating] = useState(0);

  useEffect(() => {
    setMyRating(book?.personalRating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book?.personalRating]);

  const { currentBook } = useParams();
  const bookId = Number(currentBook);

  const isPurchased = useMemo(() => {
    return !!users.cart.find((item) => item.book?.id === bookId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    users.cart,
  ]);

  useEffect(() => {
    (async () => {
      try {
        const userId = users.user.id;
        await dispatch(getDetailBooksThunk({ bookId, userId })).unwrap();
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bookId,
  ]);

  const changeMyRating = (value: number) => {
    setMyRating(value);
  };

  const textButtonPaperback = !book?.paperbackQuantity
    ? 'Not available'
    : `$ ${book.paperbackPrice.toFixed(2).toString()} USD`;

  const textButtonHardcover = !book?.hardcoverQuantity
    ? 'Not available'
    : `$ ${book.hardcoverPrice.toFixed(2).toString()} USD`;

  const addToCart = async () => {
    try {
      if (book) {
        const bookId = book?.id;
        await addBookToCart({ bookId });
        dispatch(addOrRemoveInCart(book));
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <>
      <DetailBookWrapper>
        <div className="cover-container">
          <img
            src={book?.pathToCover}
            alt="cover"
          />
        </div>
        <div className="info">
          <div className="info-title">
            <h1 className="name">{book?.name}</h1>
            <p className="author">{book?.author}</p>
            <div className="rating">
              <RatingOneStar />
              {users.user.email && (
                <div className="rating-my">
                  <RatingFiveStars
                    size="large"
                    readOnly={false}
                    myRating={myRating}
                    bookId={Number(bookId)}
                    changeMyRating={changeMyRating}
                  />
                  <div className="rating-arrow">
                    <img
                      src={arrow}
                      alt="arrow"
                    />
                  </div>
                  <p>Rate this book</p>
                </div>
              )}
            </div>
          </div>
          <div className="description">
            <h1>Description</h1>
            {book?.description}
          </div>
          <div className="purchase">
            <div>Paperback
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
                    text={textButtonPaperback}
                    onClick={addToCart}
                    isDisable={!book?.paperbackQuantity}
                  />
                )
              }
            </div>
            <div>Hardcover
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
                    text={textButtonHardcover}
                    onClick={addToCart}
                    isDisable={!book?.hardcoverQuantity}
                  />
                )
              }
            </div>
          </div>
        </div>
      </DetailBookWrapper >
      <Comments
        bookId={Number(bookId)}
      />
      {!users.user.email ? <AuthorizePoster /> : null}
      <Recommendations />
    </>
  );
};

export default DetailBook;

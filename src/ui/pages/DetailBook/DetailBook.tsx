/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { getCartThunk } from '../../../store/usersThunks';
import { getCommentsThunk, getDetailBooksThunk } from '../../../store/booksThunks';
import { Button } from '../../components/Button/Buttons';
import showToast from '../../../validation/showToast';
import addBookToCart from '../../../api/cart/addBookToCart';
import getRating from '../../../api/rating/getRating';
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

  const { currentBook } = useParams();
  const bookId = Number(currentBook);

  const isPurchased = useMemo(() => {
    const idBooksInCart: number[] = [];
    users.cart.forEach((item) => {
      if (item.book) {
        idBooksInCart.push(item.book.id);
      }
    });
    return idBooksInCart.includes(bookId);
  }, [
    bookId,
    users.cart,
  ]);

  useEffect(() => {
    (async () => {
      try {
        Promise.all([
          await dispatch(getDetailBooksThunk(bookId)).unwrap(),
          await dispatch(getCommentsThunk(bookId)).unwrap(),
          users.user.email && await getRating(bookId),
        ]).then(
          (result) => {
            setMyRating(Number(result[2]));
          },
        );
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [
    bookId,
    dispatch,
  ]);

  let textButtonPaperback = '';
  let textButtonHardcover = '';

  const currentPricePaperback = book?.paperbackPrice;

  !book?.paperbackQuantity
    ? textButtonPaperback = 'Not available'
    : textButtonPaperback = `$ ${currentPricePaperback?.toFixed(2).toString()} USD`;

  const currentPriceHardcover = book?.hardcoverPrice;

  !book?.hardcoverQuantity
    ? textButtonHardcover = 'Not available'
    : textButtonHardcover = `$ ${currentPriceHardcover?.toFixed(2).toString()} USD`;

  const addToCart = async () => {
    try {
      if (book) {
        const bookId = book?.id;
        await addBookToCart({ bookId });
        await dispatch(getCartThunk()).unwrap();
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

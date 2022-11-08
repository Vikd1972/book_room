/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { Button } from '../../components/Button/Buttons';
import showToast from '../../../validation/showToast';
import getDetailBooks from '../../../api/books/getDetailBook';
import { setOverallRating } from '../../../store/booksSlice';
import getRating from '../../../api/rating/getRating';
import RatingFiveStars from '../../components/RatingFiveStars/RatingFiveStars';
import RatingOneStar from '../../components/RatingOneStar/RatingOneStar';
import Recommendations from '../Recommendations/Recommendations';
import AuthorizePoster from '../../components/AuthorizePoster/AuthorizePoster';
import addBookToCart from '../../../api/cart/addBookToCart';
import { addCart } from '../../../store/usersSlice';
import Comments from './Comments/Comments';
import type { IBookType } from '../../../store/booksSlice';

import arrow from '../../assets/picture/arrow_back.png';

import DetailBookWrapper from './DetailBook.styles';

export const DetailBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);

  const [book, setBook] = useState<IBookType>();
  const [myRating, setMyRating] = useState<number>();

  const { bookId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        dispatch(setOverallRating(0));
        const detailBook = await getDetailBooks(Number(bookId));
        setBook(detailBook);
        dispatch(setOverallRating(detailBook.averageRating));
        const getMyRating = await getRating(Number(bookId));
        setMyRating(getMyRating.rating);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [
    bookId,
    user.id,
    dispatch,
  ]);

  let textButtonPaperback = '';
  let textButtonHardcover = '';

  const currentPricePaperback = book?.paperbackPrice;
  if (!book?.paperbackQuantity) {
    textButtonPaperback = 'Not available';
  } else {
    textButtonPaperback = `$ ${currentPricePaperback?.toFixed(2).toString()} USD`;
  }
  const currentPriceHardcover = book?.hardcoverPrice;
  if (!book?.hardcoverQuantity) {
    textButtonHardcover = 'Not available';
  } else {
    textButtonHardcover = `$ ${currentPriceHardcover?.toFixed(2).toString()} USD`;
  }

  const addToCart = async () => {
    try {
      if (book) {
        const bookId = book?.id;
        const cart = await addBookToCart({ bookId });
        dispatch(addCart(cart));
      }
    } catch (err) {
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
            id="cover"
          />
        </div>
        <div className="info">
          <h1 className="name">{book?.name}</h1>
          <p className="author">{book?.author}</p>
          <div className="rating">
            <RatingOneStar />
            <div className="rating-my">
              <RatingFiveStars
                readOnly={false}
                myRating={myRating}
                bookId={Number(bookId)}
              />
              <div className="rating-arrow">
                <img
                  src={arrow}
                  alt="arrow"
                  id="arrow"
                />
              </div>
              <p>Rate this book</p>
            </div>
          </div>
          <div className="description">
            <h1>Description</h1>
            {book?.description}
          </div>
          <div className="purchase">
            <div>Paperback
              <Button
                type="button"
                className="button"
                text={textButtonPaperback}
                onClick={addToCart}
                isDisable={!book?.paperbackQuantity}
              />
            </div>
            <div>Hardcover
              <Button
                type="button"
                className="button"
                text={textButtonHardcover}
                onClick={addToCart}
                isDisable={!book?.hardcoverQuantity}
              />
            </div>
          </div>
        </div>
      </DetailBookWrapper >
      <Comments
        bookId={Number(bookId)}
      />
      {!user.email ? <AuthorizePoster /> : null}
      <Recommendations />
    </>
  );
};

export default DetailBook;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setAverageRating } from '../../../store/booksSlice';
// import { setCart } from '../../../store/usersSlice';
import { getCartThunk } from '../../../store/usersThunks';
import type { IBookType } from '../../../store/booksSlice';
import { Button } from '../../components/Button/Buttons';
import showToast from '../../../validation/showToast';
import { getCommentsThunk } from '../../../store/booksThunks';
import getDetailBooks from '../../../api/books/getDetailBook';
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
  const user = useAppSelector((state) => state.users.user);

  const [book, setBook] = useState<IBookType>();
  const [myRating, setMyRating] = useState(0);

  const { currentBook } = useParams();
  const bookId = Number(currentBook);

  useEffect(() => {
    (async () => {
      try {
        dispatch(getCommentsThunk(bookId));
        Promise.all([
          await getDetailBooks(bookId),
          user.email && await getRating(bookId),
        ]).then((result) => {
          setBook(result[0]);
          dispatch(setAverageRating(result[0].averageRating));
          if (result[1]) {
            setMyRating(result[1].rating);
          }
        });
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
              {user.email && (
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

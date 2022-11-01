import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { Button } from '../../components/Button/Buttons';
import showToast from '../../../validation/showToast';
import getDetailBooks from '../../../api/books/getDetailBook';
import Recommendations from '../Recommendations/Recommendations';
import AuthorizePoster from '../../components/AuthorizePoster/AuthorizePoster';
import addBookToCart from '../../../api/cart/addBookToCart';
import { addCart } from '../../../store/usersSlice';
import type { IBookType } from '../../../store/booksSlice';

import DetailBookWrapper from './DetailBook.styles';

export const DetailBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);

  const [book, setBook] = useState<IBookType>();

  const { bookId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const detailBook = await getDetailBooks(Number(bookId));
        setBook(detailBook);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [bookId, user.id]);

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
    if (book) {
      const userId = user.id;
      const bookId = book?.id;
      const cart = await addBookToCart({ userId, bookId });
      dispatch(addCart(cart));
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
          <div className="rating">rating</div>
          <p className="description">
            <span>Description</span><br /><br />
            {book?.description}
          </p>
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
      {!user.email ? <AuthorizePoster /> : null}
      <Recommendations />
    </>
  );
};

export default DetailBook;

import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';

import BookWrapper from './Book.styles';
import { Button } from '../../../componentsUI/button/Buttons';
import addBookToCart from '../../../../api/cart/addBookToCart';
import { addCart } from '../../../../store/usersSlice';
import { BookType } from '../../../../store/booksSlice'
import getCart from '../../../../api/cart/getCart';

type Props = {
  book: BookType,
};

export const Book: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.users.user)

  const currentPrice = props.book.paperbackQuantity ? props.book.paperbackPrice : props.book.hardcoverPrice;
  const textButton = `$ ${currentPrice.toFixed(2).toString()} USD`;

  const addToCart = async () => {
    const userId = user.id;
    const bookId = props.book.id;
    await addBookToCart({ userId, bookId });
    const cart = await getCart(userId);
    dispatch(addCart(cart));
  }

  return (
    <BookWrapper>
      <div className='cover-container'>
        <a href={`/detail/${props.book.id}`}>
          <img
            src={props.book.pathToCover}
            alt='cover'
            id='cover' />
        </a>
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
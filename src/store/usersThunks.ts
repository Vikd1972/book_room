/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

import getCart from '../api/cart/getCart';

export const getCartThunk = createAsyncThunk('/cart',
  async () => {
    const response = await getCart();
    return response;
  });

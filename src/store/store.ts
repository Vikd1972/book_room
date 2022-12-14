import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import booksReducer from './booksSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export { store };

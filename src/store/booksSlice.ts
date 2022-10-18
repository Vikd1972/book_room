import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookType {
  id: number,
  name: string,
  author: string,
  pathToCover: string,
  description: string,
  releasedAt: Date,
  paperbackPrice: number,
  paperbackQuantity: number,
  hardcoverPrice: number,
  hardcoverQuantity: number,
  isNew: boolean,
  isBestseller: boolean,
  genres: string[]
}

interface BooksState {
  books: BookType[],
  currentBookId: number,
}

const initialState: BooksState = {
  books: [],
  currentBookId: 0
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookType[]>) => {
      state.books = [];
      state.books = action.payload
    },
    saveCurrentBookId: (state, action: PayloadAction<number>) => {
      state.currentBookId = action.payload
    },
  }
})

export const {
  addBook,
  saveCurrentBookId
} = booksSlice.actions

export default booksSlice.reducer
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
  book: BookType[]
}

const initialState: BooksState = {
  book: [],
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookType>) => {
      state.book.push(action.payload)
    },
    reset: (state) => {
      state.book.length = 0;
    },
  }
})

export const {
  addBook,
  reset 
} = booksSlice.actions

export default booksSlice.reducer
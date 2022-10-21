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

export interface ServiceInfo {
  quantityBooks: number,
  quantityPages: number,
  activePage: number,
  prevPage: number,
  nextPage: number,
  booksPerPage: number,
}

export interface GenreInfo {
  id: number,
  name: string,
}

export interface BooksState {  
  books: BookType[],
  genres: GenreInfo[],
  currentGenres: number[],
  serviceInfo: ServiceInfo,
}

const initialState: BooksState = {
  books: [],
  genres: [],
  currentGenres: [],
  serviceInfo: {
    quantityBooks: 0,
    quantityPages: 0,
    activePage: 0,
    prevPage: 0,
    nextPage: 0,
    booksPerPage: 0,
  }
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state: BooksState, action: PayloadAction<BooksState>) => {
      state.books = action.payload.books;
      state.serviceInfo = action.payload.serviceInfo;
      state.genres = action.payload.genres;
    },
    addRecomBooks: (state: BooksState, action: PayloadAction<BookType[]>) => {
      state.books = action.payload;
    },
    loadGenres: (state: BooksState, action: PayloadAction<number[]>) => {
      state.currentGenres = action.payload;
    },
  }
})

export const {
  addBooks,
  addRecomBooks,
  loadGenres,
} = booksSlice.actions

export default booksSlice.reducer
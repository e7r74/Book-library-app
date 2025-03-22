import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reducer'
const store = configureStore({
  reducer: {
    books: booksReducer,
    delete_books: booksReducer,
  },
})
export default store

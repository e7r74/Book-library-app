import { configureStore } from '@reduxjs/toolkit'
// import booksReducer from './books/reducer'
import booksReducer from './slices/bookSlice'
import filterSlice from './slices/filterSlice'
import errorReducer from './slices/errorSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterSlice,
    error: errorReducer,
  },
})
export default store

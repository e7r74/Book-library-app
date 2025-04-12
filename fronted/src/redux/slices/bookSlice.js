import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { addBook, toggleFavorite } from '../books/actionCreators'
import createBookWithId from '../../utils/createBookWithId'
import { setError } from './errorSlice'

const initialState = []
export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get('http://localhost:4000/random-book')
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      throw error
    }
  }
)
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
      //   return state.map((book) =>
      //     book.id === action.payload
      //       ? { ...book, isFavorite: !book.isFavorite }
      //       : book
      //   )
    },
  },
  // option 1
  extraReducers: {
    [fetchBook.fulfilled]: (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithId(action.payload, 'API'))
      }
    },
  },
  // option 2
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBook.fulfilled, (state, action) => {
  //     if (action.payload.title && action.payload.author) {
  //       state.push(createBookWithId(action.payload, 'API'))
  //     }
  //   })
  // },
})
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions
export const thunkFunction = async (dispatch, getState) => {
  //asyn
  try {
    const res = await axios.get('http://localhost:4000/random-book')
    if (res.data && res.data.title && res.data.author) {
      dispatch(addBook(createBookWithId(res.data, 'API')))
    }
  } catch (error) {
    console.log('error feching random book')
  }
}
export const selectBooks = (state) => state.books
export default bookSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // 1 variant
      //   return { ...state, title: action.payload }
      // 2 variant c immer
      state.title = action.payload
    },
    resetFilter: (state) => {
      return initialState
    },
  },
})

export const { setTitleFilter, resetFilter } = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export default filterSlice.reducer

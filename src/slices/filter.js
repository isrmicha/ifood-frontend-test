import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { FILTERS_ENDPOINT } from '../consts'

const initialState = {
  loading: false,
  error: false,
  values: {
    country: 'BR',
    locale: 'pt_BR'
  }
}

export const fetchFilters = createAsyncThunk(
  'fetchFilters',
  async () => {
    const { data: { filters } } = await axios.get(FILTERS_ENDPOINT)
    return filters
  }
)

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  extraReducers: {
    [fetchFilters.pending]: (state) => { state.loading = true },
    [fetchFilters.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [fetchFilters.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.filters = payload
    }
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.values = { ...state.values, ...payload }
    },
    setTextFilter: (state, { payload }) => { state.text = payload }
  }
})

export const { setFilter, setTextFilter } = filterSlice.actions

export default filterSlice.reducer

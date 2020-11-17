import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'
import { REFRESH_TOKEN_URL } from '../consts'
import moment from 'moment'

const initialState = { token: null, refreshToken: null, grantedAt: null }

export const refreshToken = createAsyncThunk(
  'refreshToken',
  async (_, { getState }) => {
    const {
      data: { access_token, refresh_token }
    } = await Axios.post(REFRESH_TOKEN_URL, {
      grant_type: 'refresh_token',
      refresh_token: getState()?.auth?.refreshToken,
      client_id: CLIENT_ID
    })
    return { access_token, refresh_token }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [refreshToken.fullfiled]: (state, { payload }) => {
      state.auth.token = payload.access_token
      state.auth.refresh_token = payload.refresh_token
      state.auth.grantedAt = moment()
    }
  },
  reducers: {
    setAuthToken: (state) => {
      const urlParams = new URLSearchParams(window.location.search)
      state.token = urlParams.get('access_token')
      state.refreshToken = urlParams.get('refresh_token')
      state.grantedAt = moment()
    },
    logout: () => {
      window.location = '/'
    }
  }
})

export const { logout, setAuthToken } = authSlice.actions

export default authSlice.reducer

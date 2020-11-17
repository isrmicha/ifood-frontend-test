import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = { token: null, refreshToken: null, grantedAt: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state) => {
      const urlParams = new URLSearchParams(window.location.search)
      state.token = urlParams.get('access_token')
      state.refreshToken = urlParams.get('refresh_token')
      state.grantedAt = moment().toISOString()
    },
    logout: () => {
      window.location = '/'
    }
  }
})

export const { logout, setAuthToken } = authSlice.actions

export default authSlice.reducer

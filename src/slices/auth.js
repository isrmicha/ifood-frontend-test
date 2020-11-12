import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: null, refreshToken: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state) => {
      const urlParams = new URLSearchParams(window.location.search)
      state.token = urlParams.get('access_token')
      state.refreshToken = urlParams.get('refresh_token')
    },
    logout: (state) => (state = initialState)
  }
})

export const { logout, setAuthToken } = authSlice.actions

export default authSlice.reducer

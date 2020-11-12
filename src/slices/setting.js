import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: null, refreshToken: null }

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setComponentSize: (state, { payload }) =>
      (state.setComponentSize = payload)
  }
})

export const { setComponentSize } = settingSlice.actions

export default settingSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import en_US from 'antd/lib/locale/en_US'
import pt_BR from 'antd/lib/locale/pt_BR'

const locales = {
  en_US,
  'pt-br': pt_BR
}

const initialState = {
  token: null,
  refreshToken: null,
  locale: { locale: 'en_US' }
}

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setComponentSize: (state, { payload }) => {
      state.componentSize = payload
    },
    setLocale: (state, { payload }) => {
      state.locale = locales[payload]
    }
  }
})

export const { setComponentSize, setLocale } = settingSlice.actions

export default settingSlice.reducer

import { combineReducers } from 'redux'
import filterReducer from './filter'
import playlistReducer from './playlist'
import authReducer from './auth'
import settingsProvider from './settings'

export default combineReducers({
  filter: filterReducer,
  playlist: playlistReducer,
  auth: authReducer,
  settings: settingsProvider
})

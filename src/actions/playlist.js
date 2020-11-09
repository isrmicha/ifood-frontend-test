import { FEATURED_PLAYLISTS_ENDPOINT } from '../consts'
import axios from 'axios'
import { logout } from './auth'

const REQUEST = 'FETCH_FEATURED_PLAYLISTS_REQUEST'
const SUCCESS = 'FETCH_FEATURED_PLAYLISTS_SUCCESS'
const FAILED = 'FETCH_FEATURED_PLAYLISTS_FAILED'

const TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST'
const TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS'
const TRACKS_FAILED = 'FETCH_TRACKS_FAILED'

export const fetchFeaturedPlaylistsRequest = () => ({ type: REQUEST })
export const fetchFeaturedPlaylistsSuccess = (payload) => ({
  type: SUCCESS,
  payload
})
export const fetchFeaturedPlaylistsFailed = (payload) => ({
  type: FAILED,
  payload
})
export const fetchFeaturedPlaylists = () => async (dispatch, getState) => {
  if (getState()?.playlists) return
  dispatch(fetchFeaturedPlaylistsRequest())
  const url = new URL(FEATURED_PLAYLISTS_ENDPOINT)
  Object.keys(getState()?.filter?.values).forEach((key) => {
    const value = key === 'timestamp' ? getState()?.filter?.values[key]?.format() : getState()?.filter?.values[key]
    return url.searchParams.append(key, encodeURI(value))
  })
  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getState()?.auth?.token}`
      }
    })
    if (data.error) return console.log(data.error)
    dispatch(fetchFeaturedPlaylistsSuccess(data))
  } catch (error) {
    console.log(error)
    if (error.includes?.('code 401')) dispatch(logout())
    dispatch(fetchFeaturedPlaylistsFailed(error))
  }
}

export const fetchTracksRequest = () => ({ type: TRACKS_REQUEST })
export const fetchTracksSuccess = (payload) => ({
  type: TRACKS_SUCCESS,
  payload
})
export const fetchTracksFailed = (payload) => ({
  type: TRACKS_FAILED,
  payload
})
export const fetchTracks = (url) => async (dispatch, getState) => {
  dispatch(fetchTracksRequest())
  try {
    const { data } = await axios.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${getState()?.auth?.token}`
      }
    })
    dispatch(fetchTracksSuccess(data))
  } catch (error) {
    console.log(error)
    if (error.includes?.('code 401')) dispatch(logout())
    dispatch(fetchTracksFailed(error))
  }
}

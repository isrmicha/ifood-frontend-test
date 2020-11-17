import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import moment from 'moment'
import { FEATURED_PLAYLISTS_ENDPOINT } from '../consts'
import { refreshToken } from '../services/auth'
import { isTokenValid } from '../utils/auth'

const initialState = {
  loading: false,
  error: false
}

export const fetchPlaylists = createAsyncThunk(
  'fetchPlaylists',
  async (_, { getState }) => {
    let refreshedToken = null
    if (!isTokenValid(getState()?.auth?.grantedAt)) {
      try {
        refreshedToken = (await refreshToken())?.data
      } catch (error) {
        console.error(error)
        window.location = '/'
      }
    }
    const url = new URL(FEATURED_PLAYLISTS_ENDPOINT)
    Object.keys(getState()?.filter?.values).forEach((key) => {
      const value =
        key === 'timestamp'
          ? getState()?.filter?.values[key]?.format()
          : getState()?.filter?.values[key]
      return url.searchParams.append(key, encodeURI(value))
    })
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getState()?.auth?.token}`
      }
    })
    if (refreshedToken) {
      data.tokenData = {
        token: refreshedToken.access_token,
        refreshToken: refreshedToken.refresh_token,
        grantedAt: moment().toISOString()
      }
    }
    return data
  }
)

export const fetchTracks = createAsyncThunk(
  'fetchTracks',
  async (url, { getState }) => {
    const { data: items } = await axios.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${getState()?.auth?.token}`
      }
    })
    return items
  }
)

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  extraReducers: {
    [fetchPlaylists.pending]: (state) => {
      if (state?.playlistTracks) return
      state.loading = true
    },
    [fetchPlaylists.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [fetchPlaylists.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.playlists = payload?.playlists
      if (payload?.tokenData) {
        state.auth = payload?.tokenData
      }
    },
    [fetchTracks.pending]: (state) => {
      state.tracksLoading = true
    },
    [fetchTracks.rejected]: (state, { payload }) => {
      state.tracksLoading = false
      state.error = payload
    },
    [fetchTracks.fulfilled]: (state, { payload }) => {
      state.tracksLoading = false
      state.playlistTracks = payload
    }
  }
})

export default playlistSlice.reducer

const getInitialState = () => ({
  loading: false,
  error: false
})

const reducer = (state = getInitialState(), { type, payload }) => ({
  FETCH_FEATURED_PLAYLISTS_REQUEST: { loading: true },
  FETCH_FEATURED_PLAYLISTS_SUCCESS: { filters: payload },
  FETCH_FEATURED_PLAYLISTS_FAILED: { error: payload },
  FETCH_TRACKS_REQUEST: { ...state, tracksLoading: true },
  FETCH_TRACKS_SUCCESS: { ...state, tracksLoading: false, playlistTracks: payload },
  FETCH_TRACKS_FAILED: { ...state, tracksLoading: false, error: payload }
})[type] || state

export default reducer

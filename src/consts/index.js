export const FILTERS_ENDPOINT =
  'https://www.mocky.io/v2/5a25fade2e0000213aa90776'
export const FEATURED_PLAYLISTS_ENDPOINT =
  'https://api.spotify.com/v1/browse/featured-playlists'
export const REFRESH_TOKEN_URL = 'https://accounts.spotify.com/api/token'
export const DEFAULT_SPOTIFY_EXPIRE_TIME = 3600000

export const LOGIN_URL = __DEV__
  ? 'http://localhost:3000/login'
  : 'https://spotifood-isrmicha.netlify.app/login'

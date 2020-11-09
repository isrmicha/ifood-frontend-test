const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
const LOGOUT = 'LOGOUT'

export const setTokenAction = (payload) => ({ type: SET_AUTH_TOKEN, payload })
export const logout = () => {
  return ({ type: LOGOUT })
}

export const setToken = () => (dispatch) => {
  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('access_token')
  const refreshToken = urlParams.get('refresh_token')
  dispatch(setTokenAction({ token, refreshToken }))
}
